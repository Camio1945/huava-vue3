# huava-vue3

The fronted of huava. Based on [LikeAdmin](https://github.com/likeshop-github/likeadmin_php/tree/master/admin).

---

# Develop note

1. `src/config/index.ts` defines default request prefix, the original value is `adminapi`, I changed it to empty string ""

2. `src/utils/request/index.ts` set the AxiosHooks, such as adding token to the header, intercept request and response.