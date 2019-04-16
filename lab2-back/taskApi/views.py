from django.shortcuts import render
from django.db.models import Q
from django.shortcuts import render
from django.http import JsonResponse

from rest_framework import generics, viewsets, status

from taskApi.Serializers import TaskListSerializer, Task, TaskSerializer
from taskApi.models import TaskList


class TaskListArray(viewsets.ModelViewSet):
    queryset = TaskList.objects.all()
    serializer_class = TaskListSerializer


class TaskArray(viewsets.ModelViewSet):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

    def get_queryset(self):
        request = self.request
        task_list_id = request.query_params.get('task_list_id')
        if task_list_id:
            self.queryset = Task.objects.filter(Q(task_list=TaskList.objects.filter(id=task_list_id)))
