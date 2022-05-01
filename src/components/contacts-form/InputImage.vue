<template>
  <div class="input_image"
       @mouseleave="showIcon=false"
  >
    <icon icon="icon-photo" 
          class="icon_image" 
          v-show="showIcon"
    /> 
    <img :src="picture" 
         v-if="picture"
         @mouseover="showIcon=true"
         @click="getFile"
         class="image--cover"
    >
    <div v-else class="aux_picture"
         @mouseover="showIcon=true"
         @click="getFile"
    >
    </div>
    <input ref="inputFile" 
           type="file" 
           hidden
           :disabled="disabled"
           @change="setFile"
           accept="image/png, image/gif, image/jpeg"
    /> 
  </div>
</template>

<script>
import Icon from "@/components/shared/Icons"
export default {
    name: "input-image-component",
    components: {
        Icon
    },
    props: {
        picture: {
            required: true,
            default: "",
            type: String
        },
        disabled: {
            required: false,
            default: false,
            type: Boolean
        },
    },
    data: () => ({
        showIcon: false
    }),
    methods: {
        getFile() {
            this.$refs.inputFile.click();
        },
        setFile(event) {
            let files =  event.target.files
            let self  = this
            if(files.length>0) {
                let _file = files[0]
                let reader = new FileReader();
                
                reader.onload = function () {
                    self.$emit("base64", reader.result)
                }
                reader.readAsDataURL(_file);
            }

        }
    }
}
</script>

<style lang="scss" scoped>
    .input_image {
        
        display: flex;
        justify-content: center;
        align-items: center;
        padding-bottom: 15px;
        position: relative;

        .icon_image {
            color: map-get($alfa-colors, 'alfa-white');
            position: absolute;
            font-size: 3em;
            z-index: 9;
        }
        
        img {
            width: 250px;
            height: 250px;
            border-radius: 50%;
            object-fit: cover;
            object-position: center right;
            cursor: pointer;
            &:hover {
                opacity: .7;
            }
        }

        .aux_picture {
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background-color: map-get($alfa-colors, 'alfa-content');
          cursor: pointer;
        }
    }
</style>