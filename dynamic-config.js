// Auto-generated DSA/CP structure configuration
// Generated on: 2025-06-17T16:31:58.351Z

// Repository structure with actual code content
const REPO_STRUCTURE = {
  "tle-eliminatorstle-eliminators": {
    "800": {
      "1.Halloumi_Boxes": [
        {
          "name": "1(77).cpp",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n \nbool check(vector<int> arr, int k, int n)\n{\n    if (k>=2 || n==1){return true;}\n \n    for (int i = 1; i<n; i++){\n        if (arr[i-1] > arr[i]) {\n            return false;\n        }\n    }\n    return true;\n}\n \nint main()\n{\n    int num = 0;\n    // cout << \"Enter num: \";\n    cin >> num;\n \n    vector<bool> val(num, false);\n \n    for (int i=0; i<num; i++)\n    {\n        int n, k;\n        // cout << \"Enter n k: \";\n        cin >> n >> k;\n \n        vector<int> arr(n);\n        // cout << \"Enter Array elements:\";\n        for (int i = 0; i < n; i++) \n        {\n            cin >> arr[i];\n        }\n \n        val[i] = check(arr, k, n);\n    }\n    for (const bool& v: val){\n        v? cout<< \"YES\" <<endl : cout << \"NO\" <<endl;\n    }\n    \n    return 0;\n}\n\n//77ms\n"
        },
        {
          "name": "2(46).cpp",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num = 0;\n    // cout << \"Enter num: \";\n    cin >> num;\n\n    vector<bool> val(num, true);\n\n    for (int i=0; i<num; i++)\n    {\n        int n, k;\n        // cout << \"Enter n k: \";\n        cin >> n >> k;\n\n        vector<int> arr(n);\n        // cout << \"Enter Array elements:\";\n        for (int i = 0; i < n; i++) \n        {\n            cin >> arr[i];\n        }\n\n        if (k>=2 || n==1){continue;}\n\n        for (int j = 1; j<n; j++){\n            if (arr[j-1] > arr[j]) {\n                val[i] = false;\n                break;\n            }\n        }\n    }\n    for (const bool& v: val){\n        v? cout<< \"YES\" <<endl : cout << \"NO\" <<endl;\n    }\n    \n    return 0;\n}\n\n\n// 46ms\n"
        },
        {
          "name": "3(62).cpp",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nstring solve_case() {\n    int n, k;\n    // cout << \"Enter n k: \";\n    cin >> n >> k;\n\n    vector<int> arr(n);\n    // cout << \"Enter Array elements:\";\n    for (int i = 0; i < n; i++) \n        cin >> arr[i];\n\n    if (k>=2 || n==1)\n        return \"YES\";\n\n    for (int j = 1; j<n; j++){\n        if (arr[j-1] > arr[j])\n            return \"NO\";\n    }\n\n    return \"YES\";\n}\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \";\n    cin >> num;\n\n    while(num--)\n    {\n        cout << solve_case() << endl;\n    }\n\n    return 0;\n}\n\n// 62ms\n// 100kb\n"
        },
        {
          "name": "4(46).cpp",
          "code": "#include <iostream>\n#include <vector>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \";\n    cin >> num;\n\n    while(num--)\n    {\n        int n, k;\n        // cout << \"Enter n k: \";\n        cin >> n >> k;\n\n        vector<int> arr(n);\n        // cout << \"Enter Array elements:\";\n        for (int i = 0; i < n; i++) \n            cin >> arr[i];\n\n        if (k>=2 || n==1){\n            cout<< \"YES\" <<endl;\n        } else {\n            bool is_sorted = true;\n            for (int j = 1; j<n; j++){\n                if (arr[j-1] > arr[j]) {\n                    cout << \"NO\" <<endl;\n                    is_sorted = false;\n                    break;\n                }\n            }\n            if (is_sorted)\n                cout<< \"YES\" <<endl;\n        }\n    }\n    return 0;\n}\n\n// 46ms\n// 100kb\n"
        },
        {
          "name": "5(62).cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \";\n    cin >> num;\n\n    while(num--)\n    {\n        int n, k, a;\n        // cout << \"Enter n k: \";\n        cin >> n >> k;\n\n        if (k>=2 || n==1){\n            cout<< \"YES\" <<endl;\n        } else {\n            bool is_sorted = true;\n            int b;\n            // cout<< \"Enter 1st element\" <<endl;\n            cin >> a;\n            n--;\n            while (n && is_sorted){\n                // cout<< \"Enter next element\" <<endl;\n                cin>>b;\n                n--;\n                if (a>b) {\n                    is_sorted = false;\n                }\n                a=b;\n            }\n            if (is_sorted){\n                cout<< \"YES\" <<endl;\n            } else {\n                cout<< \"NO\" <<endl;\n            }\n        }\n        while (n>0) {\n            cin >> a;\n            n--;\n        }\n    }\n    return 0;\n}\n\n// 62ms\n"
        },
        {
          "name": "6(46).cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num = 0;\n    // cout << \"Enter num: \";\n    cin >> num;\n\n    while (num--)\n    {\n        int n, k;\n        // cout << \"Enter n k: \";\n        cin >> n >> k;\n\n        bool answer = true;\n        int prev;\n\n        for (int i = 0; i < n; i++) \n        {\n            int curr;\n            // cout << \"Enter the number: \";\n            cin >> curr;\n\n            if (k<2 && n!=1){\n                if (i == 0) {\n                    prev = curr;\n                } else if (prev > curr) {\n                    answer = false;\n                } else {\n                    prev = curr;\n                }\n            }\n        }\n\n        cout<< (answer? \"YES\" : \"NO\") << endl; \n    }\n    \n    return 0;\n}\n\n// 46ms\n"
        }
      ],
      "2.Line_Trip": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n, x;\n        // cout << \"Enter n x: \" <<flush;\n        cin >> n >> x;\n\n        int answer = 1;\n        int prev;\n        int curr = 0;\n\n        for (int i = 0; i < n; i++) \n        {\n            prev = curr;\n            // cout << \"Enter the number: \" <<flush;\n            cin >> curr;\n\n            if (i == 0) {\n                answer = curr;\n            } else {\n                answer = max(answer, curr-prev);\n            }   \n        }\n\n        cout << max(answer, 2* (x-prev)) << endl; \n    }\n    \n    return 0;\n}\n\n// 46 ms\n"
        },
        {
          "name": "2.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num = 0;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n, x;\n        // cout << \"Enter n x: \" <<flush;\n        cin >> n >> x;\n\n        int answer = 1;\n        int prev;\n        int curr = 0;\n\n        for (int i = 1; i <= n; i++) \n        {\n            prev = curr;\n            // cout << \"Enter the number: \" <<flush;\n            cin >> curr;\n            \n            if ((n-i)<(x-prev-1)) {\n                if (i == 1) {\n                    answer = curr;\n                } else {\n                    answer = max(answer, curr-prev);\n                }\n            }\n        }\n\n        cout << max(answer, 2* (x-curr)) << endl; \n    }\n    \n    return 0;\n}\n\n// 62 ms\n\n"
        },
        {
          "name": "3.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    cin >> num;\n\n    while (num--)\n    {\n        int n, x,  max_gap, prev, curr;\n        cin >> n >> x >> max_gap;\n        prev = max_gap;\n        \n        while (--n) \n        {\n            cin >> curr;\n            max_gap = max(max_gap, curr-prev);\n            prev = curr;\n        }\n\n        cout << max(max_gap, 2* (x-prev)) << endl; \n    }\n    \n    return 0;\n}\n\n// 62 ms\n"
        },
        {
          "name": "4.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n, x;\n        cin >> n >> x;\n\n        int prev, curr;\n        cin >> curr;\n        int answer = curr;\n\n        for (int i = 1; i < n; i++) \n        {\n            prev = curr;\n            // cout << \"Enter the number: \" <<flush;\n            cin >> curr;\n            answer = max(answer, curr-prev);\n        }\n\n        cout << max(answer, 2* (x-prev)) << endl; \n    }\n    \n    return 0;\n}\n\n// 46 ms\n"
        }
      ],
      "3.Cover_in_Water": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <algorithm>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        string ss;\n        // cout << \"Enter string: \"<<flush;\n        cin >> ss;\n\n        if(ss.find(\".\") == string::npos) {\n            cout<<0<<endl;\n        } else if (ss.find(\"...\")!= string::npos) {\n            cout<<2<<endl;\n        } else {\n            cout<<count(ss.begin(), ss.end(), '.')<<endl;\n        }\n    }\n    \n    return 0;\n}\n\n// 62ms\n"
        },
        {
          "name": "2.cpp",
          "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        string ss;\n        // cout << \"Enter string: \"<<flush;\n        cin >> ss;\n\n        int dots = 0;\n        int consecutive_dots = 0;\n        bool has3consecutive = false;\n\n        for (int i = 0; i<n; i++) {\n            if (ss[i]=='.') {\n                dots++;\n                \n                consecutive_dots++;\n                if (consecutive_dots == 3) {\n                    has3consecutive = true;\n                }\n            } else {\n                consecutive_dots = 0;\n            }\n\n        }\n\n        if(dots == 0) {\n            cout<<0<<endl;\n        } else if (has3consecutive) {\n            cout<<2<<endl;\n        } else {\n            cout<<dots<<endl;\n        }\n    }\n    \n    return 0;\n}\n\n// 62ms\n"
        },
        {
          "name": "3.cpp",
          "code": "#include <cstdio>\n#include <cstring>\nusing namespace std;\n\nint main()\n{\n    int num;\n    scanf(\"%d\", &num);\n\n    while (num--)\n    {\n        int n;\n        scanf(\"%d\", &n);\n\n        char ss[100];\n        scanf(\"%s\", ss);\n\n        int dots = 0;\n        bool hasThreeConsecutive = false;\n        int consecutiveCount = 0;\n\n        for (int i = 0; i < n; i++) {\n            if (ss[i] == '.') {\n                dots++;\n                consecutiveCount++;\n                if (consecutiveCount >= 3) {\n                    hasThreeConsecutive = true;\n                }\n            } else {\n                consecutiveCount = 0;\n            }\n        }\n\n        if (dots == 0) {\n            printf(\"0\\n\");\n        } else if (hasThreeConsecutive) {\n            printf(\"2\\n\");\n        } else {\n            printf(\"%d\\n\", dots);\n        }\n    }\n    \n    return 0;\n}\n\n// 61 ms\n"
        },
        {
          "name": "4.cpp",
          "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        string ss;\n        // cout << \"Enter string: \"<<flush;\n        cin >> ss;\n\n        int dots = 0;\n        int consecutive_dots = 0;\n        bool has3consecutive = false;\n\n        for (int i = 0; i<n; i++) {\n            if (ss[i]=='.') {\n                dots++;\n                \n                consecutive_dots++;\n                if (consecutive_dots == 3) {\n                    cout<<2<<endl;\n                    has3consecutive = true;\n                    break;\n                }\n            } else {\n                consecutive_dots = 0;\n            }\n\n        }\n\n        if (!has3consecutive) {\n            cout<<dots<<endl;\n        }\n        \n    }\n    \n    return 0;\n}\n\n// 46ms\n"
        }
      ],
      "4.Game_with_Integers": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        if (n%3==0) {\n            cout<<\"Second\"<<endl;\n        } else {\n            cout<<\"First\"<<endl;\n        }\n        \n    }\n    \n    return 0;\n}\n\n// 46ms\n"
        }
      ],
      "5.Jagged_ Swaps": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        bool out = true;\n        \n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        int f;\n        cin >> f;\n\n        for (int i = 1; i < n; i++) {\n            int a;\n            cin >> a;\n            if (f>a) {\n                out = false;\n            }\n        }\n\n        cout << (out? \"YES\\n\" :\"NO\\n\");\n\n    }\n    \n    return 0;\n}\n\n// 46ms\n"
        },
        {
          "name": "2.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {\n        int n, f;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n >> f;\n\n        bool out = true;\n\n        while (--n) {\n            int a;\n            cin >> a;\n            if (f>a) {\n                out = false;\n            }\n        }\n\n        cout << (out? \"YES\\n\" :\"NO\\n\");\n    }\n    \n    return 0;\n}\n\n// 62ms\n"
        }
      ],
      "6.Doremy's_Paint_3": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\n#include <unordered_map>\n#include <cmath>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int num;\n    // cout << \"Enter num: \"<<flush;\n    cin >> num;\n\n    while (num--)\n    {        \n        int n;\n        // cout << \"Enter n: \"<<flush;\n        cin >> n;\n\n        unordered_map<int,int> freq;\n\n        for(int i = 0; i < n; i++) {\n            int a;\n            cin >> a;\n            freq[a]++;\n        }\n\n        if (freq.size() > 2) {\n            cout << \"NO\\n\";\n            continue;\n\n        }\n\n        if (freq.size() == 1) {\n            cout << \"YES\\n\";\n            continue;\n        }\n\n        auto it = freq.begin();\n        int count1 = it->second;\n        ++it;\n        int count2 = it->second;\n\n        if (abs(count1 - count2) > 1) {\n            cout << \"NO\\n\";\n        } else {\n            cout << \"YES\\n\";\n        }\n\n    }\n    \n    return 0;\n}\n\n// 46ms\n"
        }
      ],
      "7.Don't_Try_to_Count": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, m;\n        // cout << \"Enter n m: \"<<flush;\n        cin >> n >> m;\n\n        string x, s;\n        // cout << \"Enter strings: \"<<flush;\n        cin >> x >> s;\n\n        int i = -1;\n\n        for (int j=0; j <= 5;j++) {\n            if(x.find(s) == string::npos) {\n                x += x;\n            } else {\n                i = j;\n                break;\n            }\n        }        \n\n        cout << i << endl;\n    }\n    \n    return 0;\n}\n\n// 108 ms\n"
        },
        {
          "name": "2.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <cmath>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, m;\n        // cout << \"Enter n m: \"<<flush;\n        cin >> n >> m;\n\n        string x, s;\n        // cout << \"Enter strings: \"<<flush;\n        cin >> x >> s;\n        \n\n        for (int i=0; i<5;i++) {\n            x = x+x;\n        }\n\n        int t = x.find(s);\n        // cout<<\"t= \"<<t<<endl;\n\n        if (t==string::npos) {\n            cout<<-1<<endl;\n        } else {\n            double k = double (t + m) / n;\n            // cout<<\"k= \"<< k<<endl;\n            if (k <= 1) {\n                cout << 0 << endl;\n            } else {\n                cout << (int)ceil(log2(k)) << endl;\n            }\n        }\n    }\n    \n    return 0;\n}\n\n// 108 ms\n"
        },
        {
          "name": "3.cpp",
          "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, m;\n        cin >> n >> m;\n\n        string x, s;\n        cin >> x >> s;\n\n        for (int i=0; i<5;i++) {\n            x = x+x;\n        }\n\n        int t = x.find(s);\n        // cout<<\"t= \"<< t<<endl;\n\n        if (t==string::npos) {\n            cout<<-1<<endl;\n        } else {\n            double k = double (t + m) / n;\n            // cout<<\"k= \"<< k<<endl;\n            if (k <= 1) {\n                cout << 0 << endl;\n            } else {\n                int calc = 63- __builtin_clzll(k);\n                // cout<<\"calc= \"<< calc<<endl;\n                long long k_int = (long long)k;\n                cout<< (k == k_int && (k_int & (k_int - 1))?  calc: calc+1) << endl;\n            }\n        }\n    }\n    \n    return 0;\n}\n\n// 108 ms\n"
        },
        {
          "name": "4.cpp",
          "code": "#include <iostream>\n#include <string>\n#include <cmath>\n#include <set>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, m;\n        // cout << \"Enter n m: \"<<flush;\n        cin >> n >> m;\n\n        string x, s;\n        // cout << \"Enter strings: \"<<flush;\n        cin >> x >> s;\n\n        set<char> x_chars(x.begin(), x.end());\n        bool possible = true;\n        for (char c : s) {\n            if (x_chars.find(c) == x_chars.end()) {\n                possible = false;\n                break;\n            }\n        }\n        if (!possible) {\n            cout << -1 << '\\n';\n            continue;\n        }\n\n        if (x.find(s) != string::npos) {\n            cout << 0 << '\\n';\n            continue;\n        }\n        \n\n        bool found = false;\n        for (int ops = 1; ops <= 5; ops++) {\n            x += x;\n            if (x.find(s) != string::npos) {\n                cout << ops << '\\n';\n                found = true;\n                break;\n            }\n            // Memory optimization: keep only relevant suffix\n            /* if (x.size() > 100) {\n                x = x.substr(x.size() - 50);\n            } */\n        }\n\n        if (!found) {\n            cout << -1 << '\\n';\n        }\n    }\n    \n    return 0;\n}\n\n// 124 ms\n\n"
        },
        {
          "name": "5.cpp",
          "code": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, m;\n        // cout << \"Enter n m: \"<<flush;\n        cin >> n >> m;\n\n        string x, s;\n        // cout << \"Enter strings: \"<<flush;\n        cin >> x >> s;\n\n        bool chars_in_x[26] = {false};\n        for (char c : x) {\n            chars_in_x[c - 'a'] = true;\n        }\n        bool possible = true;\n        for (char c : s) {\n            if (!chars_in_x[c - 'a']) {\n                possible = false;\n                break;\n            }\n        }\n        if (!possible) {\n            cout << -1 << endl;\n            continue;\n        }\n\n        int op = -1;\n        for (int i=0; i <= 5;i++) {\n            if(x.find(s) != string::npos) {\n                op = i;\n                break;\n            } else {\n                x += x;\n            }\n        }        \n        cout << op << endl;\n    }\n    \n    return 0;\n}\n\n// 77 ms\n"
        },
        {
          "name": "test.cpp",
          "code": "#include <iostream>\n#include <cmath>\nusing namespace std;\n\nint main() {\n    for (int i=0; i<=5; i++) {\n        cout << i <<\" loop: \" << endl;\n        cout << (int)ceil(log2(i)) << endl;\n\n        int calc = 63- __builtin_clzll(i);\n        cout<< ((int(i%2))==0?  calc: ++calc) << endl;\n    }\n\n    double k = 0.5;\n    cout << k <<\" loop: \" << endl;\n\n    cout << (int)ceil(log2(k)) << endl;\n    int calc = 63- __builtin_clzll(2.5);\n    cout<< (k == int(k) || (int(k)%2)==0?  calc: ++calc) << endl;\n\n}\n"
        }
      ],
      "8.How_Much_Does_Daytona_Cost": [
        {
          "name": "1.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, k;\n        // cout << \"Enter n k: \"<<flush;\n        cin >> n >> k;\n\n        bool possible = false;\n\n        for (int i=0; i<n; i++) {\n            int a;\n            cin >> a;\n            if (a==k) {\n                possible = true;\n                for (int j = i + 1; j < n; j++) {\n                    cin >> a;\n                }\n                break;\n            }\n        }\n\n        cout << (possible? \"YES\" : \"NO\") << \"\\n\";\n\n    }\n    \n    return 0;\n}\n\n// 62 ms\n"
        },
        {
          "name": "2.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, k;\n        // cout << \"Enter n k: \"<<flush;\n        cin >> n >> k;\n\n        bool possible = false;\n\n        for (int i=0; i<n; i++) {\n            int a;\n            cin >> a;\n            if (a==k) {\n                possible = true;\n            }\n        }\n\n        cout << (possible? \"YES\" : \"NO\") << \"\\n\";\n\n    }\n    \n    return 0;\n}\n\n// 62 ms\n"
        },
        {
          "name": "3.cpp",
          "code": "#include <iostream>\nusing namespace std;\n\nint main()\n{\n    ios_base::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    int t;\n    // cout << \"Enter t: \"<<flush;\n    cin >> t;\n\n    while (t--)\n    {\n        int n, k;\n        // cout << \"Enter n k: \"<<flush;\n        cin >> n >> k;\n\n        bool possible = false;\n\n        while (n--) {\n            int a;\n            cin >> a;\n            if (a==k) {\n                possible = true;\n            }\n        }\n\n        cout << (possible? \"YES\" : \"NO\") << \"\\n\";\n\n    }\n    \n    return 0;\n}\n\n// 62 ms\n"
        }
      ]
    }
  }
};

// Load repository structure function
async function loadRepositoryStructure() {
    return true; // Structure is embedded
}

// Get code content function
async function getCodeContent(setName, difficulty, problemName, fileName) {
    try {
        const set = REPO_STRUCTURE[setName];
        if (!set) return null;
        
        const difficultyProblems = set[difficulty];
        if (!difficultyProblems) return null;
        
        const problem = difficultyProblems[problemName];
        if (!problem) return null;
        
        const attempt = problem.find(a => a.name === fileName);
        return attempt ? attempt.code : null;
    } catch (error) {
        console.error('Error getting code content:', error);
        return null;
    }
}

// Difficulty information
const DIFFICULTY_INFO = {
    "800": {
        color: "from-green-400 to-green-600",
        description: "Implementation problems, basic algorithms",
        icon: "fas fa-seedling"
    },
    "900": {
        color: "from-blue-400 to-blue-600", 
        description: "Math, greedy, constructive algorithms",
        icon: "fas fa-calculator"
    },
    "1000": {
        color: "from-purple-400 to-purple-600",
        description: "Data structures, sorting, searching",
        icon: "fas fa-sort"
    },
    "1200": {
        color: "from-orange-400 to-orange-600",
        description: "Dynamic programming, graphs",
        icon: "fas fa-project-diagram"
    }
};

// Problem metadata (you can enhance this)
const PROBLEM_METADATA = {};

// Auto-populate metadata from structure
Object.keys(REPO_STRUCTURE).forEach(setName => {
    Object.keys(REPO_STRUCTURE[setName]).forEach(difficulty => {
        Object.keys(REPO_STRUCTURE[setName][difficulty]).forEach(problemName => {
            PROBLEM_METADATA[problemName] = {
                description: `Competitive programming problem - Rating ${difficulty}`,
                tags: difficulty <= 800 ? ['implementation', 'math'] : 
                      difficulty <= 1000 ? ['data structures', 'algorithms'] :
                      ['advanced', 'problem solving'],
                contestUrl: null // You can add contest URLs later
            };
        });
    });
});
