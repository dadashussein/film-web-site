
### Vebsayt haqqında açıqlama.

Salam hər kəsə. Mən bu veb-saytı **The Movie DB** <a href="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" target="_blank" rel="noreferrer"> <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg" alt="react" width="40" height="40"/> </a> dan api-ləri çağıraraq yaratmışam. Məqsədim öz programlaşdırma bacarığımı inkişaf elətdirməkdir. Bunun üçündə mən bir neçə alətlər dəstindən istifadə etmişəm.


<a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" alt="tailwind" width="40" height="40"/> </a><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a><a href="https://vitejs.dev/logo-with-shadow.png" target="_blank" rel="noreferrer"> <img src="https://vitejs.dev/logo-with-shadow.png" alt="tailwind" width="40" height="40"/> </a><a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>

Programın özəllikləri

- öncə CLI və dev-tools kimi `VITE` istifadə etmişəm. Fikrimcə bu `create-react-app` dan daha sürətli və rahatdır. Səbəbi də odurki npm yükləyərkən bütün modulları yükləmir və sənə lazım olan modullar və paketləri sən özün yükləyirsən.  Məsələn: environment dəyişkənləri üçün .env faylında saxlamaq paketlər hazır gəlmir. Özüm həmin modulu yükləyib config etmişəm.

-  React JS ilə hazırlamışam. Reactdan əsas istifadə səbəbim onun Hookları və basicliyidir.

- componentlər arası `data` və `state` axınını Reactın `useContext` hooklu ilə həyata keçirmişəm.

- Səhifələr arası gəzmək üçün `react-routor-dom` -dan istifadə etmişəm.

- Api çağrılarımı isə ən çox istifadə olunan , rahat və istifadəsinə görə yararlı `useSWR` ilə həyata keçirmişəm. Bu hookun əsas yararlılığı _**dataları**_ keşdə saxlayır və təkrar-təkrar serverə istək göndərmir. Bir digər müsbət cəhəti isə istədiyiniz bir neçə komponentə sarmalayırsız və həm **_api_ funksiyalarını** həmdə **api datalarını** digərlərinə rahat bir şəkildə ötürür.

- Stilləndirmə olaraq `Tailwind CSS` -dən istifadə etmişəm. Bundan istifadə etməyimin səbəbi `media` və `dark-mode` xüsiyyətlərindən rahat və açıqlamalı şəkildə istifadə etməkdir. Həmçinin də kod sətirləri daha yığcam və səliqəli görsənir(mənim fikrimcə).

 Programın funksiyanallığna gəldikdə ilk yükləndikdə trend olan filmlər gəlir. Axtarış butonuna axtarmaq istədiyin filmi yazırsan və ayrı səhifədə datalar yüklənir. Seçmək istədiyiniz filmə clickliyəndən sonra həmin film haqqında daha geniş məlumatlar olan səhifə açılır.

- Dark-light mod
- Dil seçimi  İki dil əlavə edilib: türkcə və ingiliscə.

