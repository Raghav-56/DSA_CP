#include <iostream>
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
        bool out = true;
        
        int n;
        // cout << "Enter n: "<<flush;
        cin >> n;

        int f;
        cin >> f;

        for (int i = 1; i < n; i++) {
            int a;
            cin >> a;
            if (f>a) {
                out = false;
            }
        }

        cout << (out? "YES\n" :"NO\n");

    }
    
    return 0;
}

// 46ms
