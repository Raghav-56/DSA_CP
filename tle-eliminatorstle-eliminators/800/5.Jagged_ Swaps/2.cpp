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
        int n, f;
        // cout << "Enter n: "<<flush;
        cin >> n >> f;

        bool out = true;

        while (--n) {
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

// 62ms
