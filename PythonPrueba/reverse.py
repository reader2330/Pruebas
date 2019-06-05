from sys import stdin
def reverse(cad):
    arr = ""
    for i in cad:
        arr = i + arr
    print(arr)

def init():
    name = input("Dame tu cadena ")
    reverse(name)

init()