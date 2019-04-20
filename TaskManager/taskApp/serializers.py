from rest_framework import serializers

from taskApp.models import *


class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = Task
        fields = [f.name for f in model._meta.fields] + ['task_list']


class TaskListSerializer(serializers.ModelSerializer):
    class Meta:
        model = TaskList
        fields = "__all__"