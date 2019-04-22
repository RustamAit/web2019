from django.db.models import Q

# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response

from taskApp.models import TaskList, Task
from taskApp.serializers import TaskListSerializer, TaskSerializer


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
