#include <iostream>
#include <string>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num;
    // cout << "Enter num: "<<flush;
    cin >> num;

    while (num--)
    {
        int n;
        // cout << "Enter n: "<<flush;
        cin >> n;

        string ss;
        // cout << "Enter string: "<<flush;
        cin >> ss;

        int dots = 0;
        int consecutive_dots = 0;
        bool has3consecutive = false;

        for (int i = 0; i<n; i++) {
            if (ss[i]=='.') {
                dots++;
                
                consecutive_dots++;
                if (consecutive_dots == 3) {
                    has3consecutive = true;
                }
            } else {
                consecutive_dots = 0;
            }

        }

        if(dots == 0) {
            cout<<0<<endl;
        } else if (has3consecutive) {
            cout<<2<<endl;
        } else {
            cout<<dots<<endl;
        }
    }
    
    return 0;
}

// 62ms
