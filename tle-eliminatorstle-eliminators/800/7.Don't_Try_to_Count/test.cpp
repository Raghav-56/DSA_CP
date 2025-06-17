#include <iostream>
#include <cmath>
using namespace std;

int main() {
    for (int i=0; i<=5; i++) {
        cout << i <<" loop: " << endl;
        cout << (int)ceil(log2(i)) << endl;

        int calc = 63- __builtin_clzll(i);
        cout<< ((int(i%2))==0?  calc: ++calc) << endl;
    }

    double k = 0.5;
    cout << k <<" loop: " << endl;

    cout << (int)ceil(log2(k)) << endl;
    int calc = 63- __builtin_clzll(2.5);
    cout<< (k == int(k) || (int(k)%2)==0?  calc: ++calc) << endl;

}
