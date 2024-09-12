import { GlobeIcon, MailIcon } from "lucide-react";

export type IconProps = React.HTMLAttributes<SVGElement>;

export const Icons = {
  globe: (props: IconProps) => <GlobeIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
 
  Discord: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Discord</title>
      <path d="M19.9832 4.58311C18.4943 3.88597 16.9024 3.37929 15.2381 3.09082C15.0337 3.46065 14.7949 3.95808 14.6303 4.3538C12.8611 4.08753 11.1081 4.08753 9.37143 4.3538C9.20683 3.95808 8.96257 3.46065 8.75639 3.09082C7.09027 3.37929 5.49651 3.88782 4.00769 4.5868C1.0047 9.12836 0.190639 13.5572 0.59767 17.923C2.58941 19.4116 4.51964 20.3158 6.4173 20.9076C6.88584 20.2622 7.30373 19.5762 7.66373 18.8531C6.97811 18.5924 6.32143 18.2707 5.70093 17.8971C5.86555 17.7751 6.02656 17.6475 6.18213 17.5162C9.96665 19.2877 14.0785 19.2877 17.8178 17.5162C17.9751 17.6475 18.1362 17.7751 18.299 17.8971C17.6767 18.2725 17.0182 18.5943 16.3326 18.855C16.6926 19.5762 17.1086 20.2641 17.579 20.9094C19.4784 20.3177 21.4105 19.4135 23.4022 17.923C23.8799 12.8619 22.5864 8.47375 19.9832 4.58311ZM8.17929 15.2381C7.04323 15.2381 6.11158 14.1766 6.11158 12.8841C6.11158 11.5915 7.02333 10.5282 8.17929 10.5282C9.33528 10.5282 10.2669 11.5896 10.247 12.8841C10.2488 14.1766 9.33528 15.2381 8.17929 15.2381ZM15.8206 15.2381C14.6846 15.2381 13.7529 14.1766 13.7529 12.8841C13.7529 11.5915 14.6647 10.5282 15.8206 10.5282C16.9766 10.5282 17.9082 11.5896 17.8883 12.8841C17.8883 14.1766 16.9766 15.2381 15.8206 15.2381Z" fill="currentColor"/>
    </svg>
  ),
  figma: (props: IconProps) => (
    <svg width="24" height="26" viewBox="0 0 24 26" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>Figma</title>
      <path fill-rule="currentColor" clip-rule="currentColor" d="M3.5 4C3.5 6.20914 5.29086 8 7.5 8H11.5V0H7.5C5.29086 0 3.5 1.79086 3.5 4Z" fill="currentColor"/>
      <path fill-rule="currentColor" clip-rule="currentColor" d="M11.5 0V8H15.5C17.7091 8 19.5 6.20914 19.5 4C19.5 1.79086 17.7091 0 15.5 0H11.5Z" fill="currentColor"/>
      <path fill-rule="currentColor" clip-rule="currentColor" d="M3.5 12C3.5 14.2091 5.29086 16 7.5 16H11.5V8H7.5C5.29086 8 3.5 9.79086 3.5 12Z" fill="currentColor"/>
      <path fill-rule="currentColor" clip-rule="currentColor" d="M11.5 12C11.5 9.79086 13.2909 8 15.5 8C17.7091 8 19.5 9.79086 19.5 12C19.5 14.2091 17.7091 16 15.5 16C13.2909 16 11.5 14.2091 11.5 12Z" fill="currentColor"/>
      <path fill-rule="currentColor" clip-rule="currentColor" d="M3.5 20C3.5 17.7909 5.29086 16 7.5 16H11.5V20C11.5 22.2091 9.70914 24 7.5 24C5.29086 24 3.5 22.2091 3.5 20Z" fill="currentColor"/>
    </svg>
  ),
  threads: (props: IconProps) => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M17.2645 11.1966C17.1698 11.1512 17.0735 11.1074 16.976 11.0656C16.8062 7.93667 15.0965 6.14536 12.2257 6.12703C12.2127 6.12695 12.1998 6.12695 12.1868 6.12695C10.4697 6.12695 9.04158 6.85989 8.1626 8.19362L9.74145 9.27668C10.3981 8.28043 11.4286 8.06805 12.1875 8.06805C12.1963 8.06805 12.2051 8.06805 12.2138 8.06813C13.159 8.07416 13.8723 8.34899 14.3339 8.88494C14.6699 9.27513 14.8946 9.81432 15.0059 10.4948C14.1678 10.3524 13.2614 10.3086 12.2925 10.3641C9.56312 10.5213 7.80844 12.1132 7.92629 14.3251C7.98609 15.4471 8.54505 16.4124 9.50013 17.0429C10.3076 17.576 11.3477 17.8366 12.4286 17.7776C13.856 17.6994 14.9758 17.1548 15.7571 16.1589C16.3504 15.4027 16.7256 14.4226 16.8913 13.1878C17.5716 13.5983 18.0758 14.1386 18.3542 14.788C18.8277 15.8921 18.8553 17.7062 17.375 19.1853C16.078 20.481 14.519 21.0415 12.1629 21.0588C9.54931 21.0395 7.5727 20.2013 6.28757 18.5676C5.08415 17.0378 4.46221 14.8281 4.43901 12C4.46221 9.17183 5.08415 6.96218 6.28757 5.43239C7.5727 3.79869 9.54928 2.96052 12.1628 2.9411C14.7954 2.96067 16.8064 3.80287 18.1408 5.44446C18.795 6.24947 19.2883 7.26184 19.6135 8.44222L21.4637 7.94859C21.0695 6.49567 20.4493 5.24367 19.6052 4.20535C17.8946 2.10077 15.3928 1.02236 12.1693 1H12.1564C8.93943 1.02228 6.46564 2.10479 4.80374 4.21742C3.32488 6.0974 2.56204 8.71326 2.53641 11.9923L2.53633 12L2.53641 12.0077C2.56204 15.2867 3.32488 17.9026 4.80374 19.7826C6.46564 21.8952 8.93943 22.9778 12.1564 23H12.1693C15.0294 22.9802 17.0453 22.2314 18.7061 20.5721C20.8789 18.4013 20.8135 15.6803 20.0974 14.0099C19.5836 12.8121 18.604 11.8391 17.2645 11.1966ZM12.3264 15.8393C11.1301 15.9067 9.88736 15.3698 9.82608 14.2197C9.78066 13.367 10.4329 12.4155 12.3998 12.3021C12.6251 12.2891 12.8461 12.2828 13.0632 12.2828C13.7776 12.2828 14.446 12.3522 15.0536 12.485C14.827 15.3155 13.4976 15.7751 12.3264 15.8393Z" fill="currentColor"/>
    </svg>

  ),
  nextjs: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <title>Next.js</title>
      <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
    </svg>
  ),
  framermotion: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <title>Framer Motion</title>
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 12l-8 -8v16l16 -16v16l-4 -4" />
      <path d="M20 12l-8 8l-4 -4" />
    </svg>
  ),
  tailwindcss: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <title>Tailwind CSS</title>
      <path d="m12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624-1.176-1.194-2.537-2.576-5.512-2.576z" />
    </svg>
  ),
  typescript: (props: IconProps) => (
    <svg
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <path d="m0 16v16h32v-32h-32zm25.786-1.276c.813.203 1.432.568 2.005 1.156.292.312.729.885.766 1.026.01.042-1.38.974-2.224 1.495-.031.021-.156-.109-.292-.313-.411-.599-.844-.859-1.505-.906-.969-.063-1.594.443-1.589 1.292-.005.208.042.417.135.599.214.443.615.708 1.854 1.245 2.292.984 3.271 1.635 3.88 2.557.682 1.031.833 2.677.375 3.906-.51 1.328-1.771 2.234-3.542 2.531-.547.099-1.849.083-2.438-.026-1.286-.229-2.505-.865-3.255-1.698-.297-.323-.87-1.172-.833-1.229.016-.021.146-.104.292-.188s.682-.396 1.188-.688l.922-.536.193.286c.271.411.859.974 1.214 1.161 1.021.542 2.422.464 3.115-.156.281-.234.438-.594.417-.958 0-.37-.047-.536-.24-.813-.25-.354-.755-.656-2.198-1.281-1.651-.714-2.365-1.151-3.01-1.854-.406-.464-.708-1.01-.88-1.599-.12-.453-.151-1.589-.057-2.042.339-1.599 1.547-2.708 3.281-3.036.563-.109 1.875-.068 2.427.068zm-7.51 1.339.01 1.307h-4.167v11.839h-2.948v-11.839h-4.161v-1.281c0-.714.016-1.307.036-1.323.016-.021 2.547-.031 5.62-.026l5.594.016z" />
    </svg>
  ),
  react: (props: IconProps) => (
    <svg
      role="img"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      className="size-8"
      fill="currentColor"
      {...props}
    >
      <title>React</title>
      <path d="m16 13.146c-1.573 0-2.854 1.281-2.854 2.854s1.281 2.854 2.854 2.854 2.854-1.281 2.854-2.854-1.281-2.854-2.854-2.854zm-7.99 8.526-.63-.156c-4.688-1.188-7.38-3.198-7.38-5.521s2.693-4.333 7.38-5.521l.63-.156.177.625c.474 1.635 1.083 3.229 1.818 4.771l.135.281-.135.286c-.734 1.536-1.344 3.13-1.818 4.771zm-.921-9.74c-3.563 1-5.75 2.536-5.75 4.063s2.188 3.057 5.75 4.063c.438-1.391.964-2.745 1.578-4.063-.615-1.318-1.141-2.672-1.578-4.063zm16.901 9.74-.177-.625c-.474-1.635-1.083-3.229-1.818-4.766l-.135-.286.135-.286c.734-1.536 1.344-3.13 1.818-4.771l.177-.62.63.156c4.688 1.188 7.38 3.198 7.38 5.521s-2.693 4.333-7.38 5.521zm-.657-5.677c.641 1.385 1.172 2.745 1.578 4.063 3.568-1.005 5.75-2.536 5.75-4.063s-2.188-3.057-5.75-4.063c-.438 1.385-.964 2.745-1.578 4.063zm-16.255-4.068-.177-.625c-1.318-4.646-.917-7.979 1.099-9.141 1.979-1.141 5.151.208 8.479 3.625l.453.464-.453.464c-1.182 1.229-2.26 2.552-3.229 3.958l-.182.255-.313.026c-1.703.135-3.391.406-5.047.813zm2.531-8.838c-.359 0-.677.073-.943.229-1.323.766-1.557 3.422-.646 7.005 1.422-.318 2.859-.542 4.313-.672.833-1.188 1.75-2.323 2.734-3.391-2.078-2.026-4.047-3.172-5.458-3.172zm12.787 27.145c-.005 0-.005 0 0 0-1.901 0-4.344-1.427-6.875-4.031l-.453-.464.453-.464c1.182-1.229 2.26-2.552 3.229-3.958l.177-.255.313-.031c1.703-.13 3.391-.401 5.052-.813l.63-.156.177.625c1.318 4.646.917 7.974-1.099 9.135-.49.281-1.042.422-1.604.411zm-5.464-4.505c2.078 2.026 4.047 3.172 5.458 3.172h.005c.354 0 .672-.078.938-.229 1.323-.766 1.563-3.422.646-7.005-1.422.318-2.865.542-4.313.667-.833 1.193-1.75 2.323-2.734 3.396zm7.99-13.802-.63-.161c-1.661-.406-3.349-.677-5.052-.813l-.313-.026-.177-.255c-.969-1.406-2.047-2.729-3.229-3.958l-.453-.464.453-.464c3.328-3.417 6.5-4.766 8.479-3.625 2.016 1.161 2.417 4.495 1.099 9.141zm-5.255-2.276c1.521.141 2.969.365 4.313.672.917-3.583.677-6.24-.646-7.005-1.318-.76-3.797.406-6.401 2.943.984 1.073 1.896 2.203 2.734 3.391zm-10.058 20.583c-.563.01-1.12-.13-1.609-.411-2.016-1.161-2.417-4.49-1.099-9.135l.177-.625.63.156c1.542.391 3.24.661 5.047.813l.313.031.177.255c.969 1.406 2.047 2.729 3.229 3.958l.453.464-.453.464c-2.526 2.604-4.969 4.031-6.865 4.031zm-1.588-8.567c-.917 3.583-.677 6.24.646 7.005 1.318.75 3.792-.406 6.401-2.943-.984-1.073-1.901-2.203-2.734-3.396-1.453-.125-2.891-.349-4.313-.667zm7.979.838c-1.099 0-2.224-.047-3.354-.141l-.313-.026-.182-.26c-.635-.917-1.24-1.859-1.797-2.828-.563-.969-1.078-1.958-1.557-2.969l-.135-.286.135-.286c.479-1.01.995-2 1.557-2.969.552-.953 1.156-1.906 1.797-2.828l.182-.26.313-.026c2.234-.188 4.479-.188 6.708 0l.313.026.182.26c1.276 1.833 2.401 3.776 3.354 5.797l.135.286-.135.286c-.953 2.021-2.073 3.964-3.354 5.797l-.182.26-.313.026c-1.125.094-2.255.141-3.354.141zm-2.927-1.448c1.969.151 3.885.151 5.859 0 1.099-1.609 2.078-3.302 2.927-5.063-.844-1.76-1.823-3.453-2.932-5.063-1.948-.151-3.906-.151-5.854 0-1.109 1.609-2.089 3.302-2.932 5.063.849 1.76 1.828 3.453 2.932 5.063z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z"
      ></path>
    </svg>
  ),
  notion: (props: IconProps) => (
    <svg
      width="100"
      height="100"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.017 4.313l55.333 -4.087c6.797 -0.583 8.543 -0.19 12.817 2.917l17.663 12.443c2.913 2.14 3.883 2.723 3.883 5.053v68.243c0 4.277 -1.553 6.807 -6.99 7.193L24.467 99.967c-4.08 0.193 -6.023 -0.39 -8.16 -3.113L3.3 79.94c-2.333 -3.113 -3.3 -5.443 -3.3 -8.167V11.113c0 -3.497 1.553 -6.413 6.017 -6.8z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M61.35 0.227l-55.333 4.087C1.553 4.7 0 7.617 0 11.113v60.66c0 2.723 0.967 5.053 3.3 8.167l13.007 16.913c2.137 2.723 4.08 3.307 8.16 3.113l64.257 -3.89c5.433 -0.387 6.99 -2.917 6.99 -7.193V20.64c0 -2.21 -0.873 -2.847 -3.443 -4.733L74.167 3.143c-4.273 -3.107 -6.02 -3.5 -12.817 -2.917zM25.92 19.523c-5.247 0.353 -6.437 0.433 -9.417 -1.99L8.927 11.507c-0.77 -0.78 -0.383 -1.753 1.557 -1.947l53.193 -3.887c4.467 -0.39 6.793 1.167 8.54 2.527l9.123 6.61c0.39 0.197 1.36 1.36 0.193 1.36l-54.933 3.307 -0.68 0.047zM19.803 88.3V30.367c0 -2.53 0.777 -3.697 3.103 -3.893L86 22.78c2.14 -0.193 3.107 1.167 3.107 3.693v57.547c0 2.53 -0.39 4.67 -3.883 4.863l-60.377 3.5c-3.493 0.193 -5.043 -0.97 -5.043 -4.083zm59.6 -54.827c0.387 1.75 0 3.5 -1.75 3.7l-2.91 0.577v42.773c-2.527 1.36 -4.853 2.137 -6.797 2.137 -3.107 0 -3.883 -0.973 -6.21 -3.887l-19.03 -29.94v28.967l6.02 1.363s0 3.5 -4.857 3.5l-13.39 0.777c-0.39 -0.78 0 -2.723 1.357 -3.11l3.497 -0.97v-38.3L30.48 40.667c-0.39 -1.75 0.58 -4.277 3.3 -4.473l14.367 -0.967 19.8 30.327v-26.83l-5.047 -0.58c-0.39 -2.143 1.163 -3.7 3.103 -3.89l13.4 -0.78z"
        fill="#000"
      />
    </svg>
  ),
  openai: (props: IconProps) => (
    <svg role="img" viewBox="0 0 24 24" {...props}>
      <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z" />
    </svg>
  ),
  googleDrive: (props: IconProps) => (
    <svg viewBox="0 0 87.3 78" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m6.6 66.85 3.85 6.65c.8 1.4 1.95 2.5 3.3 3.3l13.75-23.8h-27.5c0 1.55.4 3.1 1.2 4.5z"
        fill="#0066da"
      />
      <path
        d="m43.65 25-13.75-23.8c-1.35.8-2.5 1.9-3.3 3.3l-25.4 44a9.06 9.06 0 0 0 -1.2 4.5h27.5z"
        fill="#00ac47"
      />
      <path
        d="m73.55 76.8c1.35-.8 2.5-1.9 3.3-3.3l1.6-2.75 7.65-13.25c.8-1.4 1.2-2.95 1.2-4.5h-27.502l5.852 11.5z"
        fill="#ea4335"
      />
      <path
        d="m43.65 25 13.75-23.8c-1.35-.8-2.9-1.2-4.5-1.2h-18.5c-1.6 0-3.15.45-4.5 1.2z"
        fill="#00832d"
      />
      <path
        d="m59.8 53h-32.3l-13.75 23.8c1.35.8 2.9 1.2 4.5 1.2h50.8c1.6 0 3.15-.45 4.5-1.2z"
        fill="#2684fc"
      />
      <path
        d="m73.4 26.5-12.7-22c-.8-1.4-1.95-2.5-3.3-3.3l-13.75 23.8 16.15 28h27.45c0-1.55-.4-3.1-1.2-4.5z"
        fill="#ffba00"
      />
    </svg>
  ),
  whatsapp: (props: IconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 175.216 175.552"
      {...props}
    >
      <defs>
        <linearGradient
          id="b"
          x1="85.915"
          x2="86.535"
          y1="32.567"
          y2="137.092"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0" stopColor="#57d163" />
          <stop offset="1" stopColor="#23b33a" />
        </linearGradient>
        <filter
          id="a"
          width="1.115"
          height="1.114"
          x="-.057"
          y="-.057"
          colorInterpolationFilters="sRGB"
        >
          <feGaussianBlur stdDeviation="3.531" />
        </filter>
      </defs>
      <path
        fill="#b3b3b3"
        d="m54.532 138.45 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.523h.023c33.707 0 61.139-27.426 61.153-61.135.006-16.335-6.349-31.696-17.895-43.251A60.75 60.75 0 0 0 87.94 25.983c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.558zm-40.811 23.544L24.16 123.88c-6.438-11.154-9.825-23.808-9.821-36.772.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954zm0 0"
        filter="url(#a)"
      />
      <path
        fill="#fff"
        d="m12.966 161.238 10.439-38.114a73.42 73.42 0 0 1-9.821-36.772c.017-40.556 33.021-73.55 73.578-73.55 19.681.01 38.154 7.669 52.047 21.572s21.537 32.383 21.53 52.037c-.018 40.553-33.027 73.553-73.578 73.553h-.032c-12.313-.005-24.412-3.094-35.159-8.954z"
      />
      <path
        fill="url(#linearGradient1780)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.312-6.179 22.559 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.518 31.126 8.524h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.929z"
      />
      <path
        fill="url(#b)"
        d="M87.184 25.227c-33.733 0-61.166 27.423-61.178 61.13a60.98 60.98 0 0 0 9.349 32.535l1.455 2.313-6.179 22.558 23.146-6.069 2.235 1.324c9.387 5.571 20.15 8.517 31.126 8.523h.023c33.707 0 61.14-27.426 61.153-61.135a60.75 60.75 0 0 0-17.895-43.251 60.75 60.75 0 0 0-43.235-17.928z"
      />
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M68.772 55.603c-1.378-3.061-2.828-3.123-4.137-3.176l-3.524-.043c-1.226 0-3.218.46-4.902 2.3s-6.435 6.287-6.435 15.332 6.588 17.785 7.506 19.013 12.718 20.381 31.405 27.75c15.529 6.124 18.689 4.906 22.061 4.6s10.877-4.447 12.408-8.74 1.532-7.971 1.073-8.74-1.685-1.226-3.525-2.146-10.877-5.367-12.562-5.981-2.91-.919-4.137.921-4.746 5.979-5.819 7.206-2.144 1.381-3.984.462-7.76-2.861-14.784-9.124c-5.465-4.873-9.154-10.891-10.228-12.73s-.114-2.835.808-3.751c.825-.824 1.838-2.147 2.759-3.22s1.224-1.84 1.836-3.065.307-2.301-.153-3.22-4.032-10.011-5.666-13.647"
      />
    </svg>
  ),
};
