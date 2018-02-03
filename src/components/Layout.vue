<template>
  <div class="wrapper">
      <div class="a box" id="main">
          <h2>#main</h2>
          <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
              Qui, veritatis perferendis vitae corrupti libero natus quaerat 
              necessitatibus earum soluta expedita ducimus sed sequi exercitationem 
              iusto culpa reprehenderit debitis numquam quia!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Sapiente voluptate at optio consectetur sunt et. 
              Quis dolorum ad magni dolores soluta, voluptas facilis architecto 
              at nulla suscipit quas. Nostrum, iure.
          </p>
      </div>
      <div class="b box" id="slot1">
          <h2>#slot1</h2>
          <vddl-list :list="smallAssets" 
          :horizontal="false"
          :allowed-types="['small']"
          :disable-if="smallAssets.length == 4"
          class="smallImageContainer">
            <vddl-draggable v-for="(asset, index) in smallAssets" :key="index"
                :draggable="asset"
                :index="index"
                :wrapper="smallAssets"
                type="small"
                class="center"
                effect-allowed="move">
                    <image-small 
                    class="dblock center img-responsive mb-2"
                    :imageUrl="asset.url"
                    ></image-small>
                    <span @click="deleteImage(asset)" class="delete">X</span>
            </vddl-draggable>
        </vddl-list>
      </div>
      <div class="c box" id="slot2">
          <h2>#slot2</h2>
          <vddl-list :list="bigAssets" 
          :horizontal="false"
          :allowed-types="['big']"
          :disable-if="bigAssets.length == 6"
          class="bigImageContainer">
            <vddl-draggable v-for="(asset, index) in bigAssets" :key="index"
                :draggable="asset"
                :index="index"
                :wrapper="bigAssets"
                type="big"
                class="center"                
                effect-allowed="move">
                    <image-big 
                    class="center img-responsive mb-2"
                    :imageUrl="asset.url"
                    ></image-big>
                    <span @click="deleteImage(asset)" class="delete">X</span>
            </vddl-draggable>
        </vddl-list>
        <div>
            <button>
                Edit layout
            </button>
        </div>

      </div>
      <div class="box" id="assets">
          <h2>#assets</h2>
        <vddl-draggable v-for="(asset, index) in assets" :key="asset.id"
            :draggable="asset"
            :index="index"
            :wrapper="assets"
            :type="asset.type"
            effect-allowed="copy">
                <image-small 
                v-if="asset.type == 'small'" 
                class="dblock center img-responsive mb-2"
                :imageUrl="asset.url"
                ></image-small>
                <image-big 
                v-else
                :imageUrl="asset.url"
                class="dblock center img-responsive mb-2"
                ></image-big>
        </vddl-draggable>


      </div>
  </div>
</template>

<script>
import ImageSmall from '@/components/ImageSmall'
import ImageBig from '@/components/ImageBig'
export default {
  name: 'layout',
  components: {
      ImageSmall,
      ImageBig,
  },
  data() {
      return {
          smallAssets: [],
          bigAssets: [],
          assets: [
              {
                  id: 1,
                  type: 'small',
                  url: 'http://via.placeholder.com/80x80'
              },
              {
                  id: 2,
                  type: 'big',
                  url: 'http://via.placeholder.com/220x250'
              },
              {
                  id: 3,
                  type: 'small',
                  url: 'http://via.placeholder.com/80x80'
              },
              {
                  id: 4,
                  type: 'small',
                  url: 'http://via.placeholder.com/80x80'
              },
              {
                  id: 5,
                  type: 'big',
                  url: 'http://via.placeholder.com/230x250'
              },
              {
                  id: 6,
                  type: 'big',
                  url: 'http://via.placeholder.com/240x250'
              },
          ],
          slot1: {
              max: 4,
              accepts: ['small']
          },
          slot2: {
              max: 6,
              accepts: ['big']
          },
          "lists": {
            "A": [
                {
                "id": 1,
                "label": "Item A1"
                },
                {
                "id": 2,
                "label": "Item A2"
                },
                
            ],
            "B": [
                {
                "id": 3,
                "label": "Item A2"
                },
            ]
        }
      }
  },
  methods: {
      deleteImage(asset) {
          const type = asset.type;
          if(type == 'small') {
              const small = this.smallAssets;
              const assetIndex = small.findIndex(element => {
                  return element.id == asset.id;
              });
              if(assetIndex == -1) return;
              this.smallAssets.splice(assetIndex, 1);
          }
          else {
              const big = this.bigAssets;
              const assetIndex = big.findIndex(element => {
                  return element.id == asset.id;
              });
              if(assetIndex == -1) return;
              this.bigAssets.splice(assetIndex, 1);
          }
      }
  }
}
</script>

<style scoped>
body {
    padding-top: 20px;
    padding-bottom: 20px;
}

.wrapper {
    display: grid;
    max-width: 100%;
    grid-gap: 10px;
    grid-template-columns: [col1-start] 60%  [col2-start] 19% [col3-start] 19% [col3-end];
    grid-template-rows: [row1-start] auto [row2-start] auto [row2-end];
    background-color: #fff;
    color: #444;
}

.box {
    border: 1px solid #585858;
    background-color: #444;
    text-align: left;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
    min-height: 150px;
    box-sizing: border-box;
}

.a {
    grid-column: col1-start / col2-start;
    grid-row: row1-start ;
}
.b {
    grid-column: col2-start ;
    grid-row: row1-start / row2-end;
}
.c {
    grid-column: col1-start / col2-start;
    grid-row: row2-start ;
}

#assets {
    grid-column: col3-start ;
    grid-row: row1-start / row2-end;
    max-height: 500px;
    overflow: auto;
    box-sizing: border-box;
}

ul.list-unstyled {
    list-style: none;
    padding: 0;
    margin: 0;
}

.center {
    margin: 0 auto;
}

.img-responsive {
    max-width: 100%;
    height: auto;
}

.dblock {
    display: block;
}

.mb-2 {
    margin-bottom: 10px;
}

.vddl-dragging{
  opacity: 0.7;
}

.vddl-dragging-source {
  display: none;
}

.vddl-list, .vddl-draggable {
  position: relative;
}

.vddl-list {
  min-height: 44px;
}

.bigImageContainer {
    display: grid;
    grid-template-columns: auto auto auto;
    grid-gap: 10px;
}

.smallImageContainer {
    display: grid;
    grid-template-columns: auto;
    grid-gap: 10px;
}

span.delete {
    position: absolute;
    top: 5px;
    right: 5px;
    color: #585858;
}
</style>
