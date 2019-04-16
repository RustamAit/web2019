from rest_framework import routers

from taskApi import views

router = routers.DefaultRouter()
router.register('task_array', views.TaskArray)
router.register('task_list_array', views.TaskListArray)
