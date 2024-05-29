import styles from './SobreMim.module.css'
import PostModelo from "componetes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/sobre_mim_foto.jpeg'

export default function SobreMim() {
    return (
        <PostModelo 
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Felipe!
            </h3>
            
            <img
                src={fotoSobreMim}
                alt="Foto do Felipe Evaldo sorrindo"
                className={styles.fotoSobreMim}
            />
            <p className={styles.paragrafo}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lectus nisl, hendrerit eu pellentesque sed, fermentum a libero. Cras convallis, erat vitae efficitur vulputate, quam odio cursus odio, eu blandit tortor neque vitae tellus. Nulla convallis luctus libero, eu pulvinar quam mattis et. Etiam porttitor leo laoreet, congue augue ut, convallis felis. Quisque et felis tempus, lacinia dolor vitae, consequat dui. Fusce faucibus ante a lectus scelerisque bibendum. Integer congue sollicitudin nibh. Fusce tempor diam vel augue consequat euismod. Aliquam erat volutpat. Ut eu aliquet lorem. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur dapibus urna sit amet purus pulvinar, et euismod ligula efficitur. Etiam tincidunt tristique leo, suscipit lobortis sem sagittis a.
            </p>
            <p className={styles.paragrafo}>
                Nunc eu velit ornare ipsum mattis ultrices. Proin nisl justo, condimentum id ultrices id, tempor vel massa. Suspendisse accumsan diam vel sapien sodales, vel elementum urna tristique. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam eleifend faucibus porttitor. Donec viverra dictum purus mollis lobortis. Donec dictum, erat in finibus lacinia, nisi turpis varius massa, vel interdum nibh turpis rhoncus diam. Mauris sagittis libero elementum tristique ullamcorper. Suspendisse non varius dolor. Nam lacus turpis, facilisis tristique metus id, consequat commodo augue. Quisque risus eros, ultrices quis purus a, feugiat bibendum diam. Nam ac maximus turpis. Suspendisse eu velit ac erat eleifend pharetra a sed nisi. Vivamus mattis arcu id pellentesque commodo. Quisque dui mi, pellentesque sed odio a, varius posuere ipsum. Nulla at purus et justo imperdiet mattis nec eget tellus.
            </p>
            <p className={styles.paragrafo}>
                Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Etiam pellentesque consequat vestibulum. Etiam eu diam quis justo tincidunt mollis id eget nisi. Integer cursus dapibus tortor id aliquet. Cras in neque ante. Interdum et malesuada fames ac ante ipsum primis in faucibus. Cras semper faucibus aliquam. Aliquam consectetur dui nec lorem tempor ullamcorper. Praesent at posuere quam.
            </p>
            <p className={styles.paragrafo}>
                Donec ac molestie orci. Fusce feugiat dolor a mi sagittis, ut maximus magna sagittis. In vestibulum, nunc a eleifend faucibus, lorem eros hendrerit tellus, in vestibulum arcu elit quis ligula. Praesent tempor lorem nec commodo mattis. Quisque in neque dapibus, pulvinar nunc id, bibendum dui. Nam volutpat ullamcorper ipsum. Morbi vestibulum quam libero, sed varius nunc scelerisque vitae. Duis ut lorem in nisi viverra maximus. Donec egestas magna feugiat, dictum nulla tempor, iaculis tortor. Etiam turpis tellus, vestibulum blandit accumsan a, porta id sem. Ut sed massa vitae nunc lobortis feugiat. Suspendisse eu volutpat ligula, a vestibulum risus. Cras sagittis nunc libero, vitae lobortis neque gravida at. Aliquam erat volutpat.
            </p>
            <p className={styles.paragrafo}>
                Vestibulum ac congue velit. Nam vel augue eros. Ut magna ante, imperdiet a ante eu, ornare malesuada nisl. Etiam condimentum aliquet luctus. Duis nec dignissim erat. Donec volutpat sapien sit amet ipsum suscipit, sed efficitur dolor malesuada. Vestibulum at blandit mi. Donec vulputate, metus eu viverra sagittis, dolor est ullamcorper eros, sit amet feugiat mauris augue eget nisl. Nunc iaculis lectus ut dolor porttitor finibus. Aenean laoreet eleifend metus, a blandit augue.
            </p>
        </PostModelo>
    )
}