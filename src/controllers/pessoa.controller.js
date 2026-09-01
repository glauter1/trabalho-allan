
import * as service from '../services/pessoa.service.js';

export const listar = async(req,res)=>{
 let pessoas = await service.listar();
 const {idade,idadeMin,idadeMax}=req.query;

 if(idade) pessoas = pessoas.filter(p=>p.idade==idade);
 if(idadeMin) pessoas = pessoas.filter(p=>p.idade>=Number(idadeMin));
 if(idadeMax) pessoas = pessoas.filter(p=>p.idade<=Number(idadeMax));

 res.json(pessoas);
};

export const buscar = async(req,res)=>{
 try{
   const pessoa = await service.buscar(req.params.id);
   res.json(pessoa);
 }catch{
   res.status(404).json({erro:'Pessoa não encontrada'});
 }
};

export const criar = async(req,res)=>{
 const {nome,email}=req.body;
 if(!nome || !email) return res.status(400).json({erro:'Dados inválidos'});
 const nova = await service.criar(req.body);
 res.status(201).json(nova);
};

export const atualizar = async(req,res)=>{
 try{
  const pessoa = await service.atualizar(req.params.id,req.body);
  res.json(pessoa);
 }catch{
  res.status(404).json({erro:'Pessoa não encontrada'});
 }
};

export const excluir = async(req,res)=>{
 try{
  await service.excluir(req.params.id);
  res.status(204).send();
 }catch{
  res.status(404).json({erro:'Pessoa não encontrada'});
 }
};
