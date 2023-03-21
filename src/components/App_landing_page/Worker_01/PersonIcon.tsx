import { memo, SVGProps } from 'react';

const PersonIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 115 197' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.17176 31.8377L9.20201 31.3564C9.45256 31.2394 9.73933 31.2267 9.99926 31.3211C10.2592 31.4155 10.471 31.6093 10.588 31.8598V31.8598L21.6176 55.4705C21.7563 55.7672 21.7713 56.1069 21.6595 56.4147C21.5477 56.7226 21.3182 56.9734 21.0215 57.112L20.1654 57.5119L8.17176 31.8377Z'
      fill='#223667'
    />
    <path
      d='M93.0013 139.443C87.7383 132.442 83.5778 124.677 80.6641 116.418C80.4953 115.924 80.5073 115.386 80.698 114.9C80.8887 114.414 81.2456 114.011 81.7053 113.764L99.7151 104.114C100.006 103.956 100.33 103.868 100.661 103.854C100.992 103.841 101.321 103.903 101.624 104.036C101.933 104.17 102.207 104.373 102.426 104.629C102.644 104.886 102.801 105.188 102.885 105.514C104.982 113.473 108.922 120.827 114.387 126.981C114.612 127.231 114.777 127.53 114.87 127.853C114.962 128.177 114.979 128.518 114.92 128.849C114.862 129.175 114.732 129.484 114.537 129.752C114.343 130.02 114.09 130.24 113.798 130.396L95.7878 140.046C95.3271 140.292 94.7942 140.366 94.2839 140.255C93.7737 140.145 93.3191 139.857 93.0013 139.443V139.443Z'
      fill='#C8CAD0'
    />
    <path
      d='M94.23 138.519C94.3269 138.64 94.463 138.723 94.6147 138.755C94.7665 138.786 94.9244 138.763 95.0613 138.691L113.071 129.041C113.159 128.995 113.234 128.93 113.292 128.85C113.35 128.77 113.389 128.678 113.406 128.581C113.424 128.478 113.419 128.373 113.39 128.272C113.361 128.172 113.31 128.08 113.239 128.003C107.612 121.668 103.556 114.097 101.398 105.904C101.373 105.803 101.325 105.709 101.258 105.629C101.19 105.55 101.105 105.487 101.01 105.445C100.92 105.405 100.821 105.386 100.722 105.39C100.624 105.394 100.527 105.421 100.441 105.469L82.4312 115.119C82.2948 115.193 82.1884 115.312 82.1304 115.455C82.0724 115.599 82.0665 115.759 82.1137 115.907C84.9752 124.018 89.0613 131.644 94.23 138.519V138.519Z'
      fill='white'
    />
    <path
      d='M100.897 117.885L91.0885 122.215C90.7154 122.379 90.2924 122.389 89.9124 122.242C89.5323 122.094 89.2263 121.802 89.0612 121.43L88.8186 120.88C88.6544 120.507 88.6449 120.084 88.7922 119.704C88.9395 119.324 89.2315 119.018 89.6042 118.853L99.4131 114.523C99.7862 114.359 100.209 114.349 100.589 114.497C100.969 114.644 101.275 114.936 101.44 115.309L101.683 115.858C101.847 116.231 101.857 116.654 101.709 117.034C101.562 117.414 101.27 117.72 100.897 117.885V117.885Z'
      fill='#C8CAD0'
    />
    <path
      d='M104.484 124.546L94.6755 128.876C94.3024 129.041 93.8795 129.05 93.4994 128.903C93.1194 128.756 92.8133 128.464 92.6483 128.091L92.4057 127.541C92.2415 127.168 92.232 126.745 92.3792 126.365C92.5265 125.985 92.8186 125.679 93.1912 125.514L103 121.184C103.373 121.02 103.796 121.01 104.176 121.158C104.556 121.305 104.862 121.597 105.027 121.97L105.27 122.519C105.434 122.892 105.444 123.315 105.296 123.695C105.149 124.075 104.857 124.381 104.484 124.546V124.546Z'
      fill='#C8CAD0'
    />
    <path
      d='M81.4794 118.997C80.8025 118.561 80.2294 117.983 79.8003 117.302C79.3712 116.621 79.0966 115.854 78.9958 115.056C78.8951 114.257 78.9706 113.447 79.2171 112.681C79.4637 111.914 79.8751 111.212 80.4226 110.622L76.2859 51.918L88.2017 53.0736L88.529 110.562C89.459 111.548 89.9952 112.84 90.036 114.194C90.0768 115.549 89.6194 116.871 88.7504 117.911C87.8815 118.95 86.6614 119.635 85.3212 119.835C83.9811 120.035 82.6142 119.737 81.4794 118.997L81.4794 118.997Z'
      fill='#A0616A'
    />
    <path
      d='M78.9833 71.642C78.7043 71.4413 78.4738 71.1806 78.309 70.879C78.1441 70.5773 78.0491 70.2426 78.0308 69.8993L77.1577 54.0773C77.0713 52.5097 77.5683 50.9656 78.5529 49.7428C79.5375 48.52 80.94 47.7051 82.4899 47.4551C84.0398 47.2051 85.6274 47.5378 86.9466 48.389C88.2657 49.2403 89.2229 50.5498 89.6338 52.065L93.4691 66.2108C93.6285 66.801 93.5471 67.4304 93.243 67.9608C92.9389 68.4911 92.4369 68.8792 91.847 69.0399L80.9368 71.9979C80.6053 72.0885 80.2577 72.1035 79.9196 72.0419C79.5815 71.9803 79.2616 71.8436 78.9833 71.642V71.642Z'
      fill='#0B1839'
    />
    <path d='M58.6745 191.168H52.392L49.4034 166.936H58.6755L58.6745 191.168Z' fill='#A0616A' />
    <path
      d='M47.9047 189.371H60.0207V197H40.2761C40.2761 195.998 40.4734 195.006 40.8567 194.08C41.2401 193.155 41.8021 192.314 42.5104 191.605C43.2188 190.897 44.0598 190.335 44.9853 189.952C45.9109 189.568 46.9029 189.371 47.9047 189.371V189.371Z'
      fill='#0B1839'
    />
    <path d='M82.2467 191.168H75.9642L72.9756 166.936H82.2477L82.2467 191.168Z' fill='#A0616A' />
    <path
      d='M71.4768 189.371H83.5929V197H63.8482C63.8482 195.998 64.0455 195.006 64.4289 194.08C64.8123 193.155 65.3742 192.314 66.0826 191.605C66.791 190.897 67.6319 190.335 68.5575 189.952C69.483 189.568 70.475 189.371 71.4768 189.371Z'
      fill='#0B1839'
    />
    <path
      d='M58.3778 178.959L51.4617 178.629C50.8726 178.601 50.3166 178.349 49.908 177.923C49.4995 177.498 49.2696 176.932 49.2655 176.342C47.4422 148.199 44.917 118.023 48.7828 106.365C48.7805 106.033 48.8501 105.704 48.9866 105.402C49.1231 105.099 49.3234 104.829 49.5739 104.611C49.8243 104.392 50.1189 104.231 50.4375 104.137C50.7562 104.043 51.0913 104.019 51.4201 104.067L79.0885 108.083C79.6352 108.16 80.1359 108.431 80.4987 108.847C80.8614 109.263 81.0619 109.796 81.0632 110.348C84.5957 124.151 84.7554 149.182 84.6217 175.189C84.624 175.493 84.5661 175.795 84.4512 176.077C84.3364 176.359 84.1669 176.615 83.9525 176.831C83.7382 177.047 83.4832 177.218 83.2023 177.335C82.9214 177.452 82.6201 177.513 82.3158 177.513H74.8598C74.3097 177.515 73.7771 177.319 73.359 176.962C72.9409 176.604 72.6651 176.109 72.5818 175.565L67.9817 146.321C67.9145 145.894 67.6947 145.505 67.3629 145.226C67.0312 144.948 66.6098 144.799 66.1768 144.807C65.7437 144.815 65.3282 144.979 65.007 145.269C64.6857 145.56 64.4804 145.957 64.429 146.387L60.7773 176.93C60.7085 177.489 60.4379 178.004 60.0163 178.378C59.5947 178.753 59.051 178.96 58.4873 178.962C58.451 178.962 58.4145 178.961 58.3778 178.959Z'
      fill='#0B1839'
    />
    <path
      d='M63.2465 110.351C57.1488 106.963 52.3843 106.073 50.0871 105.844C49.7818 105.814 49.4857 105.723 49.2167 105.576C48.9478 105.429 48.7115 105.228 48.5224 104.987C48.329 104.744 48.187 104.464 48.105 104.164C48.023 103.864 48.0026 103.551 48.0452 103.244L54.6749 54.0235C55.0566 51.144 56.1688 48.4101 57.9056 46.0818C59.6424 43.7536 61.9461 41.9085 64.5975 40.7222C67.164 39.5424 69.9897 39.0389 72.8057 39.2596C75.6218 39.4803 78.3345 40.418 80.6858 41.9832C80.913 42.1344 81.1359 42.2887 81.3546 42.4461C84.0624 44.4301 86.1222 47.1713 87.2746 50.3241C88.427 53.4769 88.6202 56.9003 87.83 60.1628C83.7645 76.794 82.3681 104.059 82.1294 109.356C82.1106 109.808 81.9586 110.244 81.6925 110.609C81.4264 110.974 81.0581 111.252 80.6341 111.409C78.1328 112.318 75.4932 112.788 72.8318 112.798C69.4797 112.818 66.1788 111.976 63.2465 110.351Z'
      fill='#223667'
    />
    <path
      d='M69.0247 35.6486C76.616 35.6486 82.7699 29.4946 82.7699 21.9034C82.7699 14.3121 76.616 8.1582 69.0247 8.1582C61.4335 8.1582 55.2795 14.3121 55.2795 21.9034C55.2795 29.4946 61.4335 35.6486 69.0247 35.6486Z'
      fill='#A0616A'
    />
    <path
      d='M78.3278 32.3337C75.8099 35.0158 71.1338 33.576 70.8057 29.9118C70.78 29.6273 70.7818 29.341 70.8113 29.0569C70.9807 27.4339 71.9184 25.9603 71.6938 24.2466C71.6429 23.8201 71.484 23.4136 71.2321 23.0657C69.2256 20.3788 64.5156 24.2674 62.622 21.8351C61.4608 20.3437 62.8257 17.9955 61.9347 16.3286C60.7587 14.1285 57.2753 15.2138 55.0909 14.0089C52.6605 12.6683 52.8059 8.93937 54.4058 6.67122C56.3569 3.90511 59.7778 2.42912 63.1561 2.21641C66.5344 2.00369 69.8894 2.91692 73.0434 4.14605C76.6269 5.54259 80.1805 7.47264 82.3857 10.6236C85.0675 14.4556 85.3256 19.6073 83.9844 24.0881C83.1685 26.8137 80.384 30.1434 78.3278 32.3337Z'
      fill='#0B1839'
    />
    <path
      d='M87.6654 43.6475C87.445 42.6124 85.5541 41.1981 82.8486 40.0451C78.4995 38.2836 73.7959 37.5743 69.1208 37.9751C64.4457 38.3758 59.9314 39.8752 55.9455 42.3511C55.6675 42.366 55.402 42.4719 55.19 42.6524C54.978 42.833 54.8311 43.0782 54.7721 43.3503L45.671 83.6024L44.4873 88.8446L43.7033 92.3138L42.5196 97.5407L41.8893 100.333C41.849 100.512 41.8473 100.697 41.8843 100.876C41.9213 101.056 41.9961 101.225 42.1039 101.373C42.2116 101.521 42.3496 101.644 42.5089 101.734C42.6681 101.825 42.8447 101.88 43.027 101.896L82.3259 105.289C82.3617 105.289 82.4027 105.294 82.4385 105.294C82.7627 105.292 83.0742 105.167 83.31 104.945C83.5459 104.722 83.6886 104.418 83.7093 104.095L84.0834 98.4016L84.4832 92.3138L84.6574 89.6748L85.052 83.6024L87.6705 43.7142V43.6783L87.6654 43.6475Z'
      fill='url(#paint0_linear_5_3457)'
    />
    <path
      d='M87.6654 43.6475C87.445 42.6124 85.5541 41.1981 82.8486 40.0451C78.4995 38.2836 73.7959 37.5743 69.1208 37.9751C64.4457 38.3758 59.9314 39.8752 55.9455 42.3511C55.6675 42.366 55.402 42.4719 55.19 42.6524C54.978 42.833 54.8311 43.0782 54.7721 43.3503L45.671 83.6024L44.4873 88.8446L43.7033 92.3138L42.5196 97.5407L41.8893 100.333C41.849 100.512 41.8473 100.697 41.8843 100.876C41.9213 101.056 41.9961 101.225 42.1039 101.373C42.2116 101.521 42.3496 101.644 42.5089 101.734C42.6681 101.825 42.8447 101.88 43.027 101.896L82.3259 105.289C82.3617 105.289 82.4027 105.294 82.4385 105.294C82.7627 105.292 83.0742 105.167 83.31 104.945C83.5459 104.722 83.6886 104.418 83.7093 104.095L84.0834 98.4016L84.4832 92.3138L84.6574 89.6748L85.052 83.6024L87.6705 43.7142V43.6783L87.6654 43.6475Z'
      fill='url(#paint1_linear_5_3457)'
      fillOpacity={0.2}
    />
    <path
      d='M23.1829 46.181C23.2458 46.4575 23.2868 46.7385 23.3055 47.0214L45.3186 59.7207L50.6692 56.6404L56.3732 64.1078L44.9268 72.2661L19.8132 52.4539C18.789 52.8329 17.6736 52.8911 16.6154 52.6208C15.5572 52.3505 14.6064 51.7644 13.8895 50.9405C13.1725 50.1167 12.7233 49.094 12.6017 48.0087C12.4801 46.9233 12.6917 45.8267 13.2086 44.8645C13.7254 43.9024 14.5229 43.1204 15.495 42.6226C16.4671 42.1247 17.5677 41.9346 18.6504 42.0775C19.7332 42.2204 20.7468 42.6896 21.5565 43.4226C22.3661 44.1556 22.9334 45.1177 23.1829 46.181H23.1829Z'
      fill='#A0616A'
    />
    <path
      d='M46.1047 58.6407C46.068 58.299 46.1085 57.9533 46.2232 57.6293C46.3379 57.3053 46.5239 57.0112 46.7674 56.7686L57.971 45.5623C59.0811 44.4522 60.5629 43.7923 62.1307 43.7099C63.6984 43.6276 65.2412 44.1286 66.4614 45.1163C67.6817 46.1041 68.493 47.5087 68.739 49.0593C68.985 50.6098 68.6482 52.1965 67.7935 53.5135L59.8148 65.808C59.4814 66.3204 58.9584 66.6798 58.3604 66.8071C57.7625 66.9344 57.1384 66.8193 56.6252 66.487L47.1429 60.3334C46.8542 60.1468 46.6111 59.898 46.4315 59.605C46.2518 59.3121 46.1401 58.9825 46.1047 58.6407Z'
      fill='#0B1839'
    />
    <path
      d='M52.2647 9.93665H50.0236C48.919 9.93665 48.0236 10.8321 48.0236 11.9366V15.9735H84.3581C84.9104 15.9735 85.3581 15.5258 85.3581 14.9735V9.34288C85.3581 4.37232 81.3287 0.342883 76.3581 0.342883H61.2647C56.2941 0.342883 52.2647 4.37232 52.2647 9.34288V9.93665Z'
      fill='url(#paint2_linear_5_3457)'
    />
    <path
      d='M52.2647 9.93665H50.0236C48.919 9.93665 48.0236 10.8321 48.0236 11.9366V15.9735H84.3581C84.9104 15.9735 85.3581 15.5258 85.3581 14.9735V9.34288C85.3581 4.37232 81.3287 0.342883 76.3581 0.342883H61.2647C56.2941 0.342883 52.2647 4.37232 52.2647 9.34288V9.93665Z'
      fill='url(#paint3_linear_5_3457)'
      fillOpacity={0.2}
    />
    <defs>
      <linearGradient
        id='paint0_linear_5_3457'
        x1={46.4882}
        y1={50.1757}
        x2={89.7153}
        y2={53.7398}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#07358D' />
        <stop offset={1} stopColor='#1340B4' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_5_3457'
        x1={82.978}
        y1={52.0916}
        x2={43.3828}
        y2={55.0604}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0F3CA5' />
        <stop offset={1} stopColor='#1D53B9' />
      </linearGradient>
      <linearGradient
        id='paint2_linear_5_3457'
        x1={51.7971}
        y1={3.19639}
        x2={84.5152}
        y2={12.6799}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#07358D' />
        <stop offset={1} stopColor='#1340B4' />
      </linearGradient>
      <linearGradient
        id='paint3_linear_5_3457'
        x1={81.5341}
        y1={3.64053}
        x2={51.193}
        y2={11.6378}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#0F3CA5' />
        <stop offset={1} stopColor='#1D53B9' />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(PersonIcon);
export { Memo as PersonIcon };