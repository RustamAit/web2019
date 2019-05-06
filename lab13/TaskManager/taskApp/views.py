from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from django.db.models import Q

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets, generics, status
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from taskApp.models import TaskList, Task
from taskApp.serializers import TaskListSerializer, TaskSerializer, UserSerializer

class TaskListArray(viewsets.ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return instance

    def perform_destroy(self, instance):
        instance.delete()

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class TaskArray(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        request = self.request
        task_list_id = request.query_params.get('task_list_id')
        if task_list_id:
            print(task_list_id)
            self.queryset = Task.objects.filter(Q(task_list=TaskList.objects.get(pk=task_list_id)))
        return self.queryset

    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perform_destroy(instance)
        return Response.render({'success' : True})

    def perform_destroy(self, instance):
        instance.delete()

    def put(self, request, *args, **kwargs):
        return self.update(request, *args, **kwargs)


class UserList(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer


@csrf_exempt
@api_view(["POST"])
@permission_classes((AllowAny,))
def login(request):
    username = request.data.get("username")
    password = request.data.get("password")
    if username is None or password is None:
        return Response({'error': 'Please provide both username and password'},
                        status=status.HTTP_400_BAD_REQUEST)
    user = authenticate(username=username, password=password)
    if not user:
        return Response({'error': 'Invalid Credentials'},
                        status=status.HTTP_404_NOT_FOUND)
    token, _ = Token.objects.get_or_create(user=user)
    return Response({'token': token.key},
                    status=status.HTTP_200_OK)


@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)