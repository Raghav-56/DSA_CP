#include <iostream>
#include <string>
#include <cmath>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    // cout << "Enter t: "<<flush;
    cin >> t;

    while (t--)
    {
        int n, m;
        // cout << "Enter n m: "<<flush;
        cin >> n >> m;

        string x, s;
        // cout << "Enter strings: "<<flush;
        cin >> x >> s;
        

        for (int i=0; i<5;i++) {
            x = x+x;
        }

        int t = x.find(s);
        // cout<<"t= "<<t<<endl;

        if (t==string::npos) {
            cout<<-1<<endl;
        } else {
            double k = double (t + m) / n;
            // cout<<"k= "<< k<<endl;
            if (k <= 1) {
                cout << 0 << endl;
            } else {
                cout << (int)ceil(log2(k)) << endl;
            }
        }
    }
    
    return 0;
}

// 108 ms
