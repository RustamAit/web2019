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


class TaskListSerializer2(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField(required=True)

    def create(self, validated_data):
        category = TaskList(**validated_data)
        category.save()
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance