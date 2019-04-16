from rest_framework import serializers
from taskApi.models import *


class TaskSerializer(serializers.ModelSerializer):
    class meta:
        model = Task
        fields = [f.name for f in model._meta.fields] + ['task_list']


class TaskListSerializer(serializers.ModelSerializer):
    class meta:
        model = TaskList
        fields = ('name')