from rest_framework.pagination import BasePagination
from rest_framework.response import Response

class CustomPagination(BasePagination):
    page_size = 10

    def paginate_queryset(self, queryset, request, view=None):
        page_size = self.page_size
        page = request.query_params.get('page', 1)

        start = (page - 1) * page_size
        end = page * page_size

        return queryset[start:end]

    def get_paginated_response(self, data):
        return Response({
            'next': self.get_next_link(),
            'previous': self.get_previous_link(),
            'count': self.page.paginator.count,
            'results': data
        })

    def get_next_link(self):
        if not self.page.has_next():
            return None
        return self.page.next_page_number()

    def get_previous_link(self):
        if not self.page.has_previous():
            return None
        return self.page.previous_page_number()
