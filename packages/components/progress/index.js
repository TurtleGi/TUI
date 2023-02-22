import TProgress from './index.vue';
TProgress.install = (app) => {
    app.component(TProgress.name, TProgress);
}
export default TProgress;
