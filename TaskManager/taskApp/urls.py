from django.urls import path, include
from rest_framework import routers

from taskApp import views

router = routers.DefaultRouter()
router.register('task_array', views.TaskArray)
router.register('task_list_array', views.TaskListArray)

urlpatterns = [
    path('', include(router.urls))

]