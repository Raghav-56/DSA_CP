#include <iostream>
#include <string>
#include <algorithm>
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

        if(ss.find(".") == string::npos) {
            cout<<0<<endl;
        } else if (ss.find("...")!= string::npos) {
            cout<<2<<endl;
        } else {
            cout<<count(ss.begin(), ss.end(), '.')<<endl;
        }
    }
    
    return 0;
}

// 62ms
