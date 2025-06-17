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
        int n;
        // cout << "Enter n: "<<flush;
        cin >> n;

        if (n%3==0) {
            cout<<"Second"<<endl;
        } else {
            cout<<"First"<<endl;
        }
        
    }
    
    return 0;
}

// 46ms
