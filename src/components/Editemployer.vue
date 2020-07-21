<template>
    <div id="edit-employer">
        <h3>Edit employer</h3>
        <div class="row">
            <form @submit.prevent="updatindUserneprofil"  class="col s12" >
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" disabled v-model="employer_id" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                    </div>
                </div>
                <button type="submit" class="btn green">Modifier</button>
                <router-link to="/" class="btn grey" style="margin-left: 10px;" >Annuler</router-link>
            </form>
        </div>
    </div>
</template>


<script>

import db from './firebaseInit'

    export default{
        name: 'edit-employer',

        data(){
            return{
                employer_id: null,
                name: null,
                dept: null,
                position: null
            }
        },
//UPDATE USER//  
        beforeRouteEnter(to, from, next){
            db.collection('employer').where('employer_id',
            '==', to.params.employer_id).get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    next(vm =>{
                        vm.employer_id = doc.data().employer_id
                        vm.name = doc.data().name
                        vm.dept = doc.data().dept
                        vm.position = doc.data().position
                    })
                });
            })
        },

        watch:{
            '$route': 'fetchData'
        },
      
        methods:{
        //récupérer données dnas input//
            fatechData(){
                db.collection('employer').where('employe_id', '==', this.$route.params.employer_id).get().then(querySnapshot =>{
                    querySnapshot.forEach(doc =>{
                        this.employer_id = doc.data().employer_id
                        this.name = doc.data().name
                        this.dept = doc.data().dept
                        this.position = doc.data().position
                    })
                })
            },
            updatindUserneprofil () {
                db.collection('employer').where('employe_id', '==', this.$route.params.employer_id).get().then(querySnapshots =>{
                    querySnapshots.forEach(doc =>{
                        if(doc.exists){
                        doc.ref.update({                            
                                employer_id: this.employer_id,
                            name: this.name,
                            dept: this.dept,
                            position: this.position                                                                       
                        }).then(this.$router.push({ name: 'view-employer'}) )   
                    }
                                             
                    })
                    
                })
            },
        },
            //////////
}
</script>