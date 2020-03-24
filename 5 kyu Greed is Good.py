import random

tirar5 = [random.randint(1, 6) for i in range(5)]

cuenta = [tirar5.count(i) for i in range(1, 7)]

print(sorted(tirar5))
print(cuenta)

one = {0: 0, 1: 100, 2: 200, 3: 1000, 4: 1100, 5: 1200}.get(cuenta[0])
five = {0: 0, 1: 50, 2: 100, 3: 500, 4: 550, 5: 600}.get(cuenta[4])

def resto(lista):
    lista[0] = lista[4] = 0
    if not max(lista) >= 3: return 0
    return ((cuenta.index(max(lista)) + 1) * 100)

acc = resto(cuenta)

print(f"{one} + {five} + {acc} = {one + five + acc}")
