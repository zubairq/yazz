function(args) {
/*
is_app(true)
control_type("VB")
display_name("Group control")
description("This will return the label control")
base_component_id("group_control")
load_once_from_file(true)
visibility("PRIVATE")
read_only(true)
properties(
    [
        {
            id:     "text",
            name:   "Text",
            type:   "String"
        }
        ,
        {
            id:     "background_color",
            name:   "Background color",
            type:   "String"
        }
        ,
        {
            id:         "is_container",
            name:       "Is Container?",
            type:       "Boolean",
            default:    true,
            hidden:     true
        }
        ,

        {
            id:         "has_details_ui",
            name:       "Has details UI?",
            type:       "Boolean",
            default:    true,
            hidden:     true
        }
    ]
)//properties
logo_url("/driver_icons/group_control.png")
*/

    Vue.component("group_control",{
      props: ["args", "design_mode","refresh", "children"]
      ,
      template: `<div>
                      <div    v-bind:style='"width:100%;height:40vh;"'
                              v-bind:refresh='refresh'
                              v-if='design_mode == "detail_editor"'>
                          Detail editor
                          <div    v-bind:style='"border:1px solid gray; padding: 10px;"'
                                  v-bind:refresh='refresh'
                                  v-for='(child_item,index)  in  children'>
                              <div v-if='child_item' v-bind:refresh='refresh'>
                                  <div v-if='child_item' v-bind:refresh='refresh'>{{child_item.name}}</div>
                                  <div     class='btn btn-danger'
                                           v-bind:refresh='refresh'
                                           v-if='child_item'
                                           v-bind:style='"box-shadow: rgba(0, 0, 0, 0.2) 0px 4px 8px 0px, rgba(0, 0, 0, 0.19) 0px 6px 20px 0px;padding:0px; z-index: 2147483647;opacity:1;"  +
                                                         "width: 20px; height: 20px; line-height:20px;text-align: center;vertical-align: middle;margin-left: 20px;"'
                                           v-on:click='$event.stopPropagation();deleteComponent(index)'>

                                          X

                                  </div>
                              </div>
                          </div>
                      </div>

                          <div v-bind:style='"position:relative;height:" + args.height + ";width:" + args.width + "; color: black;overflow:hidden;"'>


                               <div v-bind:style='"position:relative;width:100%;height:100%;border: 2px solid gray;background-color: "+    args["background_color"]  +  ";"'>
                                   <div style="position:absolute;top:0px">
                                        {{args.text}}
                                   </div>
                                   <div style="position:absolute;top:0px">
                                       <slot v-bind:refresh='refresh'>
                                       </slot>
                                   </div>
                               </div>
                    </div>
                </div>`
      ,
      data: function() {
       return {
         msg: "..."
     }
      },
      methods:
      {
        deleteComponent: function(index) {
            this.$root.$emit('message', {
                                            type:             "delete_component",
                                            component_index:   index
                                        })

        }
      }
    }





)
}
