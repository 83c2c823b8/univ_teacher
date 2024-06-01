#! /usr/bin/env python
# coding: utf-8
import sympy
from fractions import Fraction

def se(a,b,c,d,e,f):
    x,y = sympy.symbols('x,y')
    expr0 = a*x + b*y - e
    expr1 = c*x + d*y - f
    Sol = sympy.solve([expr0, expr1])
    return [Sol, expr0 , expr1]

def main():
    A = list(map(Fraction, input().split()))
    B = list(map(Fraction, input().split()))
    print(se(A[0],A[1],B[0],B[1],A[2],B[2]))


if __name__ == '__main__':
	main()

