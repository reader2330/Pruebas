def calculatePlus(value, n):
    if n == 0:
        return value
    return calculatePlus(value+n, n-1)

def init():
    try:
        value = 0
        n = input("Dame una n: ")
        print("La funcion F(x) da :", calculatePlus(value, int(n)))
    except TypeError:
        print("Caracter incorrecto")
init()