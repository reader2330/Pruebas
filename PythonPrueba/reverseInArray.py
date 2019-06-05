from sys import stdin
def reverse(cad):
    return cad[::-1]

def init():
    name = input("Dame tu cadena ")
    print(reverse(name))

init()