#! /usr/bin/env python3
# coding: utf-8
import random,sympy
from fractions import Fraction

def mk_sieq(a= random.randint(-20,20),b= random.randint(-20,20)):
    x,y = sympy.symbols('x,y')
    r0 = 0
    r1 = 0
    r2 = 0
    r3 = 0
    while (r0 == r1)or(r0==0)or(r1==0) :
        r0 = random.randint(-20,20)
        r1 = random.randint(-20,20)
    while (r2 == r3)or(r2==0)or(r3==0) :
        r2 = random.randint(-20,20)
        r3 = random.randint(-20,20)
    left0 = r0*x -  r1*y 
    right0 =  sympy.simplify(r0*a - r1*b)
    left1 = r2*x -  r3*y 
    right1 =  sympy.simplify(r2*a - r3*b)
    return [left0,right0,left1,right1,(sympy.simplify(a),sympy.simplify(b))]

    

def main():
    A = list(map(Fraction, input().split()))
    for i in range(10):
        print(mk_sieq(A[0],A[1]))

    

if __name__ == '__main__':
	main()

