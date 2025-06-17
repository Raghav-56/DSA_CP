#include <iostream>
#include <string>
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
        cin >> n >> m;

        string x, s;
        cin >> x >> s;

        for (int i=0; i<5;i++) {
            x = x+x;
        }

        int t = x.find(s);
        // cout<<"t= "<< t<<endl;

        if (t==string::npos) {
            cout<<-1<<endl;
        } else {
            double k = double (t + m) / n;
            // cout<<"k= "<< k<<endl;
            if (k <= 1) {
                cout << 0 << endl;
            } else {
                int calc = 63- __builtin_clzll(k);
                // cout<<"calc= "<< calc<<endl;
                long long k_int = (long long)k;
                cout<< (k == k_int && (k_int & (k_int - 1))?  calc: calc+1) << endl;
            }
        }
    }
    
    return 0;
}

// 108 ms
