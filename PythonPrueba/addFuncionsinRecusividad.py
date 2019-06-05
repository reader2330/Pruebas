def calculatePlus(i):
    value = 0
    while i > 0:
        value += i
        i = i-1
    return value

def init():
    try:
        value = 0
        n = input("Dame una n: ")
        print("La funcion F(x) da :", calculatePlus(int(n)))
    except TypeError:
        print("Caracter incorrecto")
init()