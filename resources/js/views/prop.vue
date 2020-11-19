<template>
    <div class="container">
        <div class="col-md-12">
            <table class="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Url</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in data">
                        <td>{{item.title}}</td>
                        <td>{{item.link}}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
    export default {
        props: [
            'data'
        ],
        mounted(){
            this.update();
        },
        methods:{
            update: function(){
                console.log(this.data);
            }
        }
    }

</script>
