import Styles from '@styles/hash.module.scss'



const Hash = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="274"
        height="272"
        fill="none"
        viewBox='0 200 200'
        className={Styles.hashWrapper}
        preserveAspectRatio="none"
      >
        <path
          fill="#fff"
          fill-opacity=".24"
          d="m143.323 0 38.917 22.178L58.242 239.76 19.325 217.58zM199.33 31.313l38.918 22.178L114.25 271.073l-38.917-22.179z"
        />
        <path
          fill="#fff"
          fill-opacity=".24"
          d="m273.163 136.182-22.784 38.566L34.762 47.364 57.546 8.8zM238.401 195.342l-22.784 38.566L0 106.524 22.784 67.96z"
        />
      </svg>
    );
}


export default Hash