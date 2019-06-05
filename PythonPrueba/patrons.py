def calculateSquares(n):
    return n*n
def init():
    try:
        n = input("Dame una n: ")
        print("Los cuadrados sombreados son :", calculateSquares(n))
    except TypeError:
        print("Caracter incorrecto")
init()