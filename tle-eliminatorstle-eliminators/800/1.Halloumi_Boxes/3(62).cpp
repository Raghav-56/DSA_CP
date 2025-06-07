#include <iostream>
#include <vector>
using namespace std;

string solve_case() {
    int n, k;
    // cout << "Enter n k: ";
    cin >> n >> k;

    vector<int> arr(n);
    // cout << "Enter Array elements:";
    for (int i = 0; i < n; i++) 
        cin >> arr[i];

    if (k>=2 || n==1)
        return "YES";

    for (int j = 1; j<n; j++){
        if (arr[j-1] > arr[j])
            return "NO";
    }

    return "YES";
}

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num;
    // cout << "Enter num: ";
    cin >> num;

    while(num--)
    {
        cout << solve_case() << endl;
    }

    return 0;
}

// 62ms
// 100kb
