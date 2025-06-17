#include <iostream>
#include <unordered_map>
#include <cmath>
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

        unordered_map<int,int> freq;

        for(int i = 0; i < n; i++) {
            int a;
            cin >> a;
            freq[a]++;
        }

        if (freq.size() > 2) {
            cout << "NO\n";
            continue;

        }

        if (freq.size() == 1) {
            cout << "YES\n";
            continue;
        }

        auto it = freq.begin();
        int count1 = it->second;
        ++it;
        int count2 = it->second;

        if (abs(count1 - count2) > 1) {
            cout << "NO\n";
        } else {
            cout << "YES\n";
        }

    }
    
    return 0;
}

// 46ms
