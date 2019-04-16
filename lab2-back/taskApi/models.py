from django.db import models


class TaskList(models.Model):

    name = models.CharField(max_length=100)

    def __str__(self):
        return '{}: {}'.format(self.id, self.name)


class Task(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField()
    due_on = models.DateTimeField()
    status = models.CharField(max_length=40)
    task_list = models.ForeignKey(TaskList, on_delete=models.CASCADE, related_name='tasks')