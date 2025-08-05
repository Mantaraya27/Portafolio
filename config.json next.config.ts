warning: in the working copy of 'next.config.ts', LF will be replaced by CRLF the next time Git touches it
warning: in the working copy of 'tsconfig.json', LF will be replaced by CRLF the next time Git touches it
[1mdiff --git a/next.config.ts b/next.config.ts[m
[1mindex 88b8a09..ad5bc4f 100644[m
[1m--- a/next.config.ts[m
[1m+++ b/next.config.ts[m
[36m@@ -21,7 +21,7 @@[m [mconst nextConfig: NextConfig = {[m
   webpack: (config, { dev, isServer }) => {[m
     if (!dev && !isServer) {[m
       // Optimizar para navegadores modernos[m
[31m-      config.target = 'esnext';[m
[32m+[m[32m      config.target = 'web';[m
     }[m
     return config;[m
   },[m
[1mdiff --git a/tsconfig.json b/tsconfig.json[m
[1mindex c133409..75a6735 100644[m
[1m--- a/tsconfig.json[m
[1m+++ b/tsconfig.json[m
[36m@@ -1,7 +1,7 @@[m
 {[m
   "compilerOptions": {[m
[31m-    "target": "ES2017",[m
[31m-    "lib": ["dom", "dom.iterable", "esnext"],[m
[32m+[m[32m    "target": "ES2020",[m
[32m+[m[32m    "lib": ["dom", "dom.iterable", "es2020"],[m
     "allowJs": true,[m
     "skipLibCheck": true,[m
     "strict": true,[m
