
from django.contrib import admin
from django.urls import path, include
import taskApi
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('taskApi.urls'))

]
