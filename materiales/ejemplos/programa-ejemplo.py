"""Demostración: análisis numérico sencillo para una práctica de Python."""
import math

def posicion(tiempo, velocidad_inicial=2.0, aceleracion=0.5):
    """Devuelve x(t) en metros para un movimiento uniformemente acelerado."""
    return velocidad_inicial * tiempo + 0.5 * aceleracion * tiempo ** 2

if __name__ == '__main__':
    for t in range(0, 11, 2):
        print(f't = {t:2d} s; x = {posicion(t):.2f} m')
