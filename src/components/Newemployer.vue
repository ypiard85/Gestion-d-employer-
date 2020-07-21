<template>
    <div id="new-employer">
        <h3>New employer</h3>
        <div class="row">
            <form @submit.prevent="saveUser"  class="col s12" >
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="employer_id" required>
                        <label for="">Employer Id</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="name" required>
                        <label for="">Name</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="dept" required>
                        <label for="">Departement</label>
                    </div>
                </div>
                <div class="row">
                    <div class="input-field col s12">
                        <input type="text" v-model="position" required>
                        <label for="">Position</label>
                    </div>
                </div>
                <button type="submit" class="btn green">Enregistrer</button>
                <router-link to="/" class="btn grey" style="margin-left: 10px;" >Annuler</router-link>
            </form>
        </div>
    </div>
</template>


<script>
    import db from './firebaseInit'

    export default{
        name: 'new-employer',

        data(){
            return{ 
                employer_id: null,
                name: null,
                dept: null,
                position: null
            }
        },
////AJOUTER USER////
        methods:{
            saveUser(){
                db.collection('employer').add({
                    employer_id: this.employer_id,
                    name: this.name,
                    dept: this.dept,
                    position: this.position                    
                }).then(this.$router.push('/')).catch(err => console.log(err))
                
            }
        }
///////////////////
    }
</script>