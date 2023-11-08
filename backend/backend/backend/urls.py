# project's urls.py

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('main/', include('main.urls')),       # URLs for the main app
    path('users/', include('user.urls')),       # URLs for the user app
    #path('helper/', include('helper.urls')),   # URLs for the helper app
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
