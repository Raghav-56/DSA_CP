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
        // cout << "Enter n m: "<<flush;
        cin >> n >> m;

        string x, s;
        // cout << "Enter strings: "<<flush;
        cin >> x >> s;

        int i = -1;

        for (int j=0; j <= 5;j++) {
            if(x.find(s) == string::npos) {
                x += x;
            } else {
                i = j;
                break;
            }
        }        

        cout << i << endl;
    }
    
    return 0;
}

// 108 ms
