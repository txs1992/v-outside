import { Vue, Component } from 'vue-property-decorator'
import Outside from  '@packages/index.ts'

@Component({
  directives: {
    Outside
  },
  name: 'simple',
})
export default class PageSimple extends Vue {
  mounted() {
    // console.log(bind)
  }

  handleOutside() {
    console.log("handleOutside")
  }
}
