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

        bool chars_in_x[26] = {false};
        for (char c : x) {
            chars_in_x[c - 'a'] = true;
        }
        bool possible = true;
        for (char c : s) {
            if (!chars_in_x[c - 'a']) {
                possible = false;
                break;
            }
        }
        if (!possible) {
            cout << -1 << endl;
            continue;
        }

        int op = -1;
        for (int i=0; i <= 5;i++) {
            if(x.find(s) != string::npos) {
                op = i;
                break;
            } else {
                x += x;
            }
        }        
        cout << op << endl;
    }
    
    return 0;
}

// 77 ms
