import Highway from '@dogstudio/highway';

class Fade extends Highway.Transition {
    in({ from, to, trigger, done }) {

    }

    out({ from, trigger, done }) {
        window.scrollTo(0, 0);
        from.remove();
        done();
    }
}

export default Fade;