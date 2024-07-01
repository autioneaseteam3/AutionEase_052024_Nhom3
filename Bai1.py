import math
def ktra_tinh_zto(n):
    i = 3
    while i <= math.sqrt(n):
        if n % i == 0:
            return False
        i += 2
    return True
ztos = []
def xd_mang_zto(n):
    i = 3
    while i <= n/2:
        if(ktra_tinh_zto(i) == True):
            ztos.append(i)
        i+=2
Qprimes = []
def xd_mang_qprime(n):
    for i in range(0, len(ztos)):
        Qprimes.append(ztos[i]*2)
    for i in range(0, len(ztos)):
        for j in range(i+1, len(ztos)):
            z = ztos[i]*ztos[j]
            if z <= n:
                Qprimes.append(z)

n = int(input('Nhap so N:'))

xd_mang_zto(n)
xd_mang_qprime(n)

print(ztos)
Qprimes.sort()
print(Qprimes)