from django.shortcuts import render

def view_TicTacToe(request):
    return render(request, 'main.html')

