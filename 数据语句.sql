g o 
 a l t e r   p r o c     [ d b o ] . [ E x e c D a y D a t a S o u r c e F o r G o o d s ] 
 a s   
 s e t   n o c o u n t   o n 
 d e c l a r e   @ s q l   v a r c h a r ( 6 0 0 0 ) , @ B e g i n D a t e   D a t e T i m e , @ E n d D a t e   D a t e T i m e , @ I D   v a r c h a r ( 4 0 ) , @ C o u n t   i n t 
 - - �Q{�Tek�S�R  �S Rd�MR$N*Ng�vpenc�d��S�RW[�k  0R'��Sf�~  0R�e�N'��TGl;`
 - - i f   e x i s t s ( s e l e c t   n a m e   f r o m   [ s y s o b j e c t s ]   w h e r e   n a m e = ' M o b i l e D a y D a t a S o u r c e ' ) 
 - - t r u n c a t e   t a b l e   M o b i l e D a y D a t a S o u r c e 
 s e l e c t   @ B e g i n D a t e = C o n v e r t ( v a r c h a r ( 1 0 ) , D A T E A D D ( M M , - 2 , G E T D A T E ( ) ) , 1 2 1 ) , @ E n d D a t e = C o n v e r t ( v a r c h a r ( 1 0 ) , G E T D A T E ( ) , 1 2 1 ) + '   0 0 : 0 0 : 0 0 . 0 0 0 ' 
 i f   e x i s t s ( s e l e c t   n a m e   f r o m   [ s y s o b j e c t s ]   w h e r e   n a m e = ' M o b i l e D a y D a t a S o u r c e F o r G o o d s ' ) 
 b e g i n 
 d e l e t e   f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s     w h e r e   D a t e   > = @ B e g i n D a t e   a n d   D a t e < = @ E n d D a t e 
 e n d 
 
 i f   n o t   e x i s t s ( s e l e c t   n a m e   f r o m   [ s y s o b j e c t s ]   w h e r e   n a m e = ' M o b i l e D a y D a t a S o u r c e F o r G o o d s ' ) 
 s e t   @ s q l = ' C r e a t e   t a b l e   M o b i l e D a y D a t a S o u r c e F o r G o o d s ( I D   b i g i n t   n o t   n u l l   i d e n t i t y ( 1 , 1 )     p r i m a r y   k e y , D a t e   D a t e T i m e , V i p I D   v a r c h a r ( 2 0 ) , V i p   v a r c h a r ( 5 0 ) , D e p a r t m e n t I D   v a r c h a r ( 2 0 ) , 
 D e p a r t m e n t   v a r c h a r ( 1 0 0 ) , G o o d s T y p e I D   v a r c h a r ( 2 0 ) , G o o d s T y p e   v a r c h a r ( 5 0 ) , 
 E m p l o y e e I D   v a r c h a r ( 2 0 ) , N a m e   v a r c h a r ( 5 0 ) , B r a n d I D   v a r c h a r ( 2 0 ) , B r a n d   v a r c h a r ( 5 0 ) , 
 S u p p l i e r I D   v a r c h a r ( 2 0 ) , S u p p l i e r   v a r c h a r ( 5 0 ) , G o o d s I D   v a r c h a r ( 3 0 ) , Q t y   i n t , A m t   m o n e y , R e t a i l A m o u n t   m o n e y 
 ) ' 
 p r i n t   @ s q l 
 e x e c ( @ s q l ) 
 
 
 i f   n o t   e x i s t s ( s e l e c t   n a m e   f r o m   [ s y s o b j e c t s ]   w h e r e   n a m e = ' M o b i l e D a y D a t a S o u r c e L o g ' ) 
 E x e c ( ' C r e a t e   T a b l e   M o b i l e D a y D a t a S o u r c e L o g   ( I D   v a r c h a r ( 4 0 )   n o t   n u l l       p r i m a r y   k e y , P r o c N a m e   n v a r c h a r ( 4 0 ) , B e g i n T i m e   D a t e T i m e   , E n d T i m e   D a t e T i m e , u s e r S e c o n d   i n t ) ' ) 
 
 s e t   @ I D = n e w i d ( ) 
 
 I n s e r t   i n t o   M o b i l e D a y D a t a S o u r c e L o g ( I D , P r o c N a m e , B e g i n T i m e )         
 s e l e c t   @ I D , ' E x e c D a y D a t a S o u r c e F o r G o o d s ' , G E T D A T E ( ) 
 
 s e l e c t   @ C o u n t = C O U N T ( 1 )   f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s 
 - - NS+TS_)Y�vpenc
   i f   @ C o u n t > = 1 
   b e g i n 
       I n s e r t   i n t o   M o b i l e D a y D a t a S o u r c e F o r G o o d s ( D a t e , V i p I D , D e p a r t m e n t I D , G o o d s T y p e I D , E m p l o y e e I D , B r a n d I D , S u p p l i e r I D , G o o d s I D , Q t y , A m t , R e t a i l A m o u n t ) 
       s e l e c t   C o n v e r t ( v a r c h a r ( 1 0 ) , a . D a t e , 1 2 1 ) , ( c a s e   w h e n   i s n u l l ( a . v i p i d , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . V I P I D   e n d )   , 
                             a . D e p a r t m e n t I D , g . G o o d s T y p e I D , ( C a s e     w h e n   I S N U L L ( a . E m p l o y e e I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . E m p l o y e e I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . B r a n d I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . B r a n d I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . S u p p l i e r I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . S u p p l i e r I D   e n d ) , 
                             b . G o o d s I D , 
                             S u m ( b . Q u a n t i t y ) , S u m ( b . F a c t A m o u n t ) , S u m ( b . Q u a n t i t y * g . R e t a i l S a l e s )   
                             f r o m   P O S S a l e s   a   j o i n   P O S S a l e s D e t a i l   b   o n   a . P o s s a l e s i d = b . P o s s a l e s i d     
                             J o i n   G o o d s   g   o n   b . G o o d s I D = g . G o o d s I D   w h e r e   a . D a t e   > = @ B e g i n D a t e   a n d   a . D a t e <   @ E n d D a t e   a n d   a . T y p e = '  �.UUS'   a n d     a . A u d i t F l a g = 1 
                             G r o u p   b y   C o n v e r t ( v a r c h a r ( 1 0 ) , a . D a t e , 1 2 1 ) , ( c a s e   w h e n   i s n u l l ( a . v i p i d , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . V I P I D   e n d )   , 
                             a . D e p a r t m e n t I D , g . G o o d s T y p e I D , ( C a s e     w h e n   I S N U L L ( a . E m p l o y e e I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . E m p l o y e e I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . B r a n d I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . B r a n d I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . S u p p l i e r I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . S u p p l i e r I D   e n d ) , b . G o o d s I D 
       
   e n d   e l s e   
   b e g i n 
   I n s e r t   i n t o   M o b i l e D a y D a t a S o u r c e F o r G o o d s ( D a t e , V i p I D , D e p a r t m e n t I D , G o o d s T y p e I D , E m p l o y e e I D , B r a n d I D , S u p p l i e r I D , G o o d s I D , Q t y , A m t , R e t a i l A m o u n t ) 
   s e l e c t   C o n v e r t ( v a r c h a r ( 1 0 ) , a . D a t e , 1 2 1 ) , ( c a s e   w h e n   i s n u l l ( a . v i p i d , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . V I P I D   e n d )   , 
                             a . D e p a r t m e n t I D , g . G o o d s T y p e I D , ( C a s e     w h e n   I S N U L L ( a . E m p l o y e e I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . E m p l o y e e I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . B r a n d I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . B r a n d I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . S u p p l i e r I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . S u p p l i e r I D   e n d ) , 
                             b . G o o d s I D , 
                             S u m ( b . Q u a n t i t y ) , S u m ( b . F a c t A m o u n t ) , S u m ( b . Q u a n t i t y * g . R e t a i l S a l e s )   
                             f r o m   P O S S a l e s   a   j o i n   P O S S a l e s D e t a i l   b   o n   a . P o s s a l e s i d = b . P o s s a l e s i d     
                             J o i n   G o o d s   g   o n   b . G o o d s I D = g . G o o d s I D   w h e r e   a . D a t e < @ E n d D a t e   a n d     a . T y p e = '  �.UUS'   a n d     a . A u d i t F l a g = 1   
                             G r o u p   b y   C o n v e r t ( v a r c h a r ( 1 0 ) , a . D a t e , 1 2 1 ) , ( c a s e   w h e n   i s n u l l ( a . v i p i d , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . V I P I D   e n d )   , 
                             a . D e p a r t m e n t I D , g . G o o d s T y p e I D , ( C a s e     w h e n   I S N U L L ( a . E m p l o y e e I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   a . E m p l o y e e I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . B r a n d I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . B r a n d I D   e n d ) , 
                             ( C a s e   w h e n   i s n u l l ( g . S u p p l i e r I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . S u p p l i e r I D   e n d ) , b . G o o d s I D 
   
   e n d     
   / * 
       s e t   @ s q l = ' U p d a t e   a   s e t   a . D e p a r t m e n t = b . D e p a r t m e n t     f r o m   M o b i l e D a y D a t a S o u r c e   a , D e p a r t m e n t   b   w h e r e   a . D e p a r t m e n t I D = b . D e p a r t m e n t I D   a n d   i s n u l l ( a . D e p a r t m e n t , ' ' ' ' ) = ' ' ' '   ' + C H A R ( 1 3 ) + 
                         ' U p d a t e   a   s e t   a . G o o d s T y p e = b . G o o d s T y p e     f r o m   M o b i l e D a y D a t a S o u r c e   a , G o o d s T y p e   b   w h e r e   a . G o o d s T y p e I D = b . G o o d s T y p e I D   a n d   i s n u l l ( a . G o o d s T y p e , ' ' ' ' ) = ' ' ' '   ' + C H A R ( 1 3 ) + 
                         ' U p d a t e   a   s e t   a . N a m e = b . N a m e     f r o m   M o b i l e D a y D a t a S o u r c e   a , E m p l o y e e   b   w h e r e   a . E m p l o y e e I D = b . E m p l o y e e I D   a n d   i s n u l l ( a . N a m e , ' ' ' ' ) = ' ' ' '   ' + C H A R ( 1 3 ) + 
                         ' U p d a t e   a   s e t   a . B r a n d = b . B r a n d     f r o m   M o b i l e D a y D a t a S o u r c e   a , B r a n d   b   w h e r e   a . B r a n d I D = b . B r a n d I D   a n d   i s n u l l ( a . B r a n d , ' ' ' ' ) = ' ' ' '   ' + C H A R ( 1 3 ) + 
                         ' U p d a t e   a   s e t   a . S u p p l i e r = b . S u p p l i e r     f r o m   M o b i l e D a y D a t a S o u r c e   a , S u p p l i e r   b   w h e r e   a . S u p p l i e r I D = b . S u p p l i e r I D   a n d   i s n u l l ( a . S u p p l i e r , ' ' ' ' ) = ' ' ' '   ' + C H A R ( 1 3 ) + 
                         ' U p d a t e   a   s e t   a . V I P = b . V I P     f r o m   M o b i l e D a y D a t a S o u r c e   a , v i p   b   w h e r e   a . V I P I D = b . V I P I D   a n d   i s n u l l ( a . V I P , ' ' ' ' ) = ' ' ' '   ' 
 
     p r i n t   @ s q l 
     e x e c ( @ s q l ) 
     * / 
     
 - - (u�NS_)Y�[�e��l	g�NUOpenc�v�`�Q�㉳Q�g�N0Rpenc
     i f   n o t   e x i s t s ( s e l e c t   T o p   1   D a t e   f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s ) 
     i n s e r t   i n t o   M o b i l e D a y D a t a S o u r c e F o r G o o d s ( D a t e )   s e l e c t   C o n v e r t ( v a r c h a r ( 1 0 ) , D a t e A d d ( d d , - 1 , G e t D a t e ( ) ) , 1 2 1 ) 
     
 
 - - gbL��[T�v�e��    (u�eUSMO  �y
 U p d a t e   M o b i l e D a y D a t a S o u r c e L o g   s e t   E n d T i m e = G E T D A T E ( )   w h e r e   i d = @ i d 
 U p d a t e   M o b i l e D a y D a t a S o u r c e L o g   s e t   u s e r S e c o n d = D A T E D I F F ( s s , B e g i n T i m e , E n d T i m e )   w h e r e   i d = @ i d 
 s e t   n o c o u n t   o f f 
 
 - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
 
 g o 
 A L T E R   P r o c   [ d b o ] . [ z _ r e p o r t 8 8 ]   @ h o s t N a m e   v a r c h a r ( 5 0 ) = ' ' , @ B e g i n D a t e   v a r c h a r ( 1 0 ) = ' 2 0 1 9 - 1 0 - 1 6 ' , 
                                               @ E n d D a t e   v a r c h a r ( 1 0 ) = ' 2 0 1 9 - 1 0 - 1 6 ' , @ d i s T y p e   v a r c h a r ( 2 0 ) = ' �^��' , 
                                               @ C o n d i t i o n   v a r c h a r ( 1 0 0 0 ) = ' ' , @ u s e r I D   v a r c h a r ( 3 0 ) = ' 1 ' , 
                                               @ d e b u g F l a g   b i t   = 0 
   a s 
   / * 
   E x e c   z _ r e p o r t 8 8   ' A C 1 ' , ' 2 0 1 9 - 0 1 - 0 1 ' , ' 2 0 1 9 - 1 0 - 1 6 ' , '  �.U�cL�' , ' ' , ' 1 ' , 1 
   * / 
   s e t   n o c o u n t   o n   
 
   d e c l a r e   @ s q l   v a r c h a r ( 6 0 0 0 ) , @ D a t e S t r   v a r c h a r ( 1 0 0 0 ) , @ D e p t R i g h t S t r   v a r c h a r ( 3 0 0 ) , @ C 1 3   c h a r ( 2 ) , @ G o o d s S t r   v a r c h a r ( 6 0 0 0 ) , 
                     @ g r o u p f i e l d   v a r c h a r ( 1 0 0 ) , @ M a x D a t e   v a r c h a r ( 1 0 ) , @ T T N a m e T   v a r c h a r ( 2 0 0 ) , @ T a b l e N a m e   v a r c h a r ( 3 0 ) , @ j o i n S t r   v a r c h a r ( 3 0 ) , @ F i e l d   v a r c h a r ( 5 0 ) 
   
         s e l e c t   	 @ D e p t R i g h t S t r = ' a n d   e x i s t s ( s e l e c t   D e p a r t m e n t I D   f r o m   D e p a r t m e n t R i g h t   r   '   +   
                     ' w h e r e   a . D e p a r t m e n t I D = r . D e p a r t m e n t I D   a n d   r . R i g h t F l a g = 1   a n d   r . U s e r I D = ' ' ' +   @ U s e r I D + ' ' ' )   '   
                     , @ C 1 3 = C H A R ( 1 3 ) , @ G o o d s S t r = ' ' , @ g r o u p f i e l d = ' ' , @ T T N a m e T = ' t e m p d b . . [ R e p o r t M a s t e r T e m p _ ' + @ U s e r I D + ' ] ' , 
                     @ T a b l e N a m e = ' ' , @ j o i n S t r = ' ' , @ F i e l d = ' ' 
   
   i f   n o t   e x i s t s ( s e l e c t   N a m e   f r o m   s y s o b j e c t s   w h e r e   n a m e = ' R e p o r t M a s t e r ' ) 
   b e g i n   
 
   s e t   @ s q l   = ' C r e a t e   t a b l e   R e p o r t M a s t e r ( i d   i n t   n o t   n u l l   i d e n t i t y ( 1 , 1 )   p r i m a r y   k e y , h o s t N a m e   v a r c h a r ( 5 0 ) , k e y i d   v a r c h a r ( 3 0 ) , N a m e   v a r c h a r ( 5 0 ) , Q u a n t i t y   i n t , F a c t A m o u n t   m o n e y , L v   m o n e y , L v S t r   v a r c h a r ( 2 0 ) , R e t a i l S a l e s   m o n e y , A v g P r i c e   m o n e y )   ' + @ C 1 3 + 
                       ' C r e a t e   t a b l e   R e p o r t M a s t e r D e t a i l ( i d   i n t   n o t   n u l l   i d e n t i t y ( 1 , 1 )   p r i m a r y   k e y , h o s t N a m e   v a r c h a r ( 5 0 ) , k e y i d   v a r c h a r ( 3 0 ) , G o o d s I D   v a r c h a r ( 3 0 ) , C o d e   v a r c h a r ( 3 0 ) , N a m e   v a r c h a r ( 5 0 ) , Q u a n t i t y   i n t   , F a c t A m o u n t   m o n e y , R e t a i l S a l e s   m o n e y , A v g P r i c e   m o n e y , F l a g   i n t   d e f a u l t ( 0 ) ) ' 
   
   e n d   e l s e   b e g i n 
   
   s e t   @ s q l   = ' d e l e t e   f r o m   R e p o r t M a s t e r   w h e r e   h o s t N a m e   = ' ' ' + @ h o s t N a m e + ' ' '   ' + @ C 1 3 + 
                       ' d e l e t e   f r o m   R e p o r t M a s t e r D e t a i l   w h e r e   h o s t N a m e   = ' ' ' + @ h o s t N a m e + ' ' '   ' 
   e n d 
 
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
     e x e c ( @ s q l ) 
   
     i f   @ B e g i n D a t e > @ E n d D a t e   r e t u r n 
       s e t     @ D a t e S t r   = ' w h e r e   a . D a t e   > = ' ' ' + @ B e g i n D a t e + ' ' '   a n d   a . D a t e   < = ' ' ' + @ E n d D a t e + '   2 3 : 5 9 : 5 9 . 9 9 7 ' '   ' 
   
 
   
     i f   e x i s t s ( s e l e c t   N a m e   f r o m   t e m p d b . . s y s o b j e c t s   w h e r e   n a m e = ' R e p o r t M a s t e r T e m p _ ' + @ U s e r I D ) 
     e x e c ( ' d r o p   t a b l e   ' + @ T T N a m e T )           
                     
                     
   i f   @ d i s T y p e < > ' '   
   b e g i n   
     i f   @ d i s T y p e   = ' �^��'   
     b e g i n 
     i f   @ C o n d i t i o n < > ' ' 
     s e l e c t   @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   a . D e p a r t m e n t I D   i n ( ' + @ C o n d i t i o n + ' )   '   
     
     s e l e c t   @ g r o u p f i e l d   = ' a . D e p a r t m e n t I D ' , @ T a b l e N a m e   = ' , D e p a r t m e n t   b   ' , @ j o i n S t r = '   a . k e y I D = b . D e p a r t m e n t I D   ' , @ F i e l d = ' b . D e p a r t m e n t ' 
     e n d 
     i f   @ d i s T y p e   = ' �T{|'   
     b e g i n 
     i f   @ C o n d i t i o n < > ' ' 
     s e l e c t     @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   g . G o o d s T y p e I D   i n ( ' + @ C o n d i t i o n + ' )   ' 
     s e l e c t   @ g r o u p f i e l d   = ' g . G o o d s T y p e I D ' , @ T a b l e N a m e   = ' , G o o d s T y p e   b ' , @ j o i n S t r = '   a . k e y I D = b . G o o d s T y p e I D   ' , @ F i e l d = ' b . G o o d s T y p e ' 
     e n d 
     i f   @ d i s T y p e   = ' �TLr' 
     b e g i n 
     i f   @ C o n d i t i o n < > ' ' 
     s e l e c t     @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   g . B r a n d I D   i n ( ' + @ C o n d i t i o n + ' )   ' 
     s e l e c t   @ g r o u p f i e l d   = ' g . B r a n d I D ' , @ T a b l e N a m e = ' , B r a n d   b ' , @ j o i n S t r = '   a . k e y I D = b . B r a n d I D   ' , @ F i e l d = ' b . B r a n d ' 
     e n d 
     i f   @ d i s T y p e   = ' �SFU'   
     b e g i n 
     i f   @ C o n d i t i o n < > ' ' 
     s e l e c t     @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   g . s u p p l i e r I D   i n ( ' + @ C o n d i t i o n + ' )   ' 
     
     s e l e c t   @ g r o u p f i e l d   = ' g . s u p p l i e r I D ' , @ T a b l e N a m e   = ' , S u p p l i e r   b ' , @ j o i n S t r = '   a . k e y I D = b . S u p p l i e r I D   ' , @ F i e l d = ' b . S u p p l i e r ' 
     
     e n d 
       
     i f   @ d i s T y p e   = ' �[-�'   
     b e g i n 
       i f   @ C o n d i t i o n < > ' ' 
     s e l e c t   @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   a . E m p l o y e e I D   i n ( ' + @ C o n d i t i o n + ' )   ' 
     s e l e c t   @ g r o u p f i e l d   = ' a . E m p l o y e e I D ' , @ T a b l e N a m e   = ' , E m p l o y e e   b ' , @ j o i n S t r = '   a . k e y I D = b . E m p l o y e e I D   ' , @ F i e l d = ' b . N a m e ' 
     e n d 
     i f   @ d i s T y p e   = '  �.U�cL�'   
     b e g i n 
     i f   @ C o n d i t i o n < > ' ' 
     s e l e c t   @ G o o d s S t r   = @ G o o d s S t r   + '   a n d   b . G o o d s I D   i n ( ' + @ C o n d i t i o n + ' )   '   
       s e l e c t   @ g r o u p f i e l d   = ' b . G o o d s I D ' , @ T a b l e N a m e   = ' , G o o d s   b   ' , @ j o i n S t r = '   a . k e y I D = b . G o o d s I D   ' , @ F i e l d = ' b . C o d e ' 
     e n d   
   e n d 
   
   - - M o b i l e D a y D a t a S o u r c e   NS+T'��S  �b@b	g�v��bcba . 
   
 - -   s e l e c t   @ M a x D a t e =   C o n v e r t ( v a r c h a r ( 1 0 ) , M A X ( D a t e ) , 1 2 1 )   f r o m     M o b i l e D a y D a t a S o u r c e F o r G o o d s 
   
   s e t     @ s q l   = ' s e l e c t   ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + ' , S u m ( Q t y )   Q t y , S u m ( A m t )   A m t , F l a g = 0   i n t o   ' + @ T T N a m e T + '     f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s   a   ' + @ D a t e S t r + R e p l a c e ( R e p l a c e ( @ G o o d s S t r , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + @ D e p t R i g h t S t r + '   g r o u p   b y   ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) 
   i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
   e x e c ( @ s q l ) 
   
     i f   @ d i s T y p e   i n ( ' �^��' , ' �T{|' , ' �TLr' , ' �SFU' , ' �[-�' ) 
     b e g i n 
       s e t   @ s q l   = ' i n s e r t   i n t o   R e p o r t M a s t e r D e t a i l ( h o s t N a m e , k e y I D , G o o d s I D , Q u a n t i t y , F a c t A m o u n t ) ' + @ C 1 3 + 
                           ' s e l e c t   ' ' ' + @ h o s t N a m e + ' ' ' , ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + ' , a . G o o d s I D , S u m ( Q t y ) , S u m ( A m t )   f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s   a   ' + @ D a t e S t r + R e p l a c e ( R e p l a c e ( @ G o o d s S t r , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + @ D e p t R i g h t S t r + '   g r o u p   b y   ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + ' , a . G o o d s I D ' 
   
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
       e x e c ( @ s q l ) 
   
     e n d 
   
   - - M o b i l e D a y D a t a S o u r c e F o r G o o d s   9hnc  ag�N�g�N g'Y�v�eg
 
       
 C r e a t e   t a b l e   # D a t e T a b l e ( F i e l d   v a r c h a r ( 5 0 ) , D a t e   D a t e T i m e ) 
 
 
 
   s e t   @ S Q L   = ' i n s e r t   i n t o   # D a t e T a b l e ( F i e l d , D a t e )         
                 s e l e c t   ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + ' ,   C o n v e r t ( v a r c h a r ( 1 0 ) , M a x ( a . D a t e ) , 1 2 1 ) + ' '   2 3 : 5 9 : 5 9 . 9 9 7 ' '   D a t e   f r o m   M o b i l e D a y D a t a S o u r c e F o r G o o d s   a   ' + @ D a t e S t r + R e p l a c e ( R e p l a c e ( @ G o o d s S t r , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) + @ D e p t R i g h t S t r + '   g r o u p   b y     ' + R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' a . ' ) , ' b . ' , ' a . ' ) 
 
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
       e x e c ( @ s q l ) 
 
 
 s e l e c t   *   f r o m   # D a t e T a b l e 
 
   i f   e x i s t s ( s e l e c t   T o p   1   D a t e   f r o m   # D a t e T a b l e ) 
 b e g i n 
   s e t     @ D a t e S t r   = @ D a t e S t r + '   A N D   a . A u d i t F l a g = 1   a n d   a . T y p e = ' '  �.UUS' '   a n d   e x i s t s ( s e l e c t   D a t e   f r o m   # D a t e T a b l e   c   w h e r e   c . F i e l d = ' + @ g r o u p f i e l d + '   a n d   a . D a t e   > c . D a t e   )   ' 
 e n d   e l s e   b e g i n 
 s e t     @ D a t e S t r   = @ D a t e S t r + '   A N D   a . A u d i t F l a g = 1   a n d   a . T y p e = ' '  �.UUS' '   ' 
 e n d   
 
 - - C a s e   w h e n   i s n u l l ( g . B r a n d I D , ' ' ) = ' '   t h e n   ' zz'   e l s e   g . B r a n d I D   e n d 
   s e t   @ s q l   = ' i n s e r t   i n t o   ' + @ T T N a m e T + ' ( ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) + ' , Q t y , A m t , F l a g ) ' + @ C 1 3 + 
                       ' s e l e c t   C a s e   w h e n   i s n u l l ( ' + @ g r o u p f i e l d + ' , ' ' ' ' ) = ' ' ' '   t h e n   ' ' zz' '   e l s e   ' + @ g r o u p f i e l d + '   e n d , S u m ( b . Q u a n t i t y ) , S u m ( b . F a c t A m o u n t ) , 0   f r o m   P O S S a l e s   a   w i t h ( n o l o c k )   j o i n   P O S S a l e s D e t a i l   b   w i t h ( n o l o c k )     o n   a . P O S S a l e s I D = b . P O S S a l e s I D   j o i n   g o o d s   g   o n   b . G o o d s I D = g . G o o d s I D   ' + @ C 1 3 + 
                       @ D a t e S t r + @ G o o d s S t r + @ D e p t R i g h t S t r + '   g r o u p   b y   ' + @ g r o u p f i e l d 
   
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
     e x e c ( @ s q l ) 
 
   i f   @ d i s T y p e   i n ( ' �^��' , ' �T{|' , ' �TLr' , ' �SFU' , ' �[-�' ) 
     b e g i n 
       s e t   @ s q l   = ' i n s e r t   i n t o   R e p o r t M a s t e r D e t a i l ( h o s t N a m e , k e y I D , G o o d s I D , Q u a n t i t y , F a c t A m o u n t ) ' + @ C 1 3 + 
                           ' s e l e c t   ' ' ' + @ h o s t N a m e + ' ' ' , C a s e   w h e n   i s n u l l ( ' + @ g r o u p f i e l d + ' , ' ' ' ' ) = ' ' ' '   t h e n   ' ' zz' '   e l s e   ' + @ g r o u p f i e l d + '   e n d , b . G o o d s I D , S u m ( b . Q u a n t i t y ) , S u m ( b . F a c t A m o u n t )   f r o m   P O S S a l e s   a   w i t h ( n o l o c k )   j o i n   P O S S a l e s D e t a i l   b   w i t h ( n o l o c k )     o n   a . P O S S a l e s I D = b . P O S S a l e s I D   j o i n   g o o d s   g   o n   b . G o o d s I D = g . G o o d s I D   ' + @ D a t e S t r + @ G o o d s S t r + @ D e p t R i g h t S t r + '   g r o u p   b y   C a s e   w h e n   i s n u l l ( ' + @ g r o u p f i e l d + ' , ' ' ' ' ) = ' ' ' '   t h e n   ' ' zz' '   e l s e   ' + @ g r o u p f i e l d + '   e n d ,   b . G o o d s I D ' 
   
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
       e x e c ( @ s q l ) 
   
     s e t   @ s q l   = ' i n s e r t   i n t o   R e p o r t M a s t e r D e t a i l ( h o s t N a m e , k e y I D , G o o d s I D , Q u a n t i t y , F a c t A m o u n t , F l a g ) ' + @ C 1 3 + 
                       ' s e l e c t   ' ' ' + @ h o s t N a m e + ' ' ' , k e y I D , G o o d s I D , S u m ( Q u a n t i t y ) , S u m ( F a c t A m o u n t ) , 1   f r o m   R e p o r t M a s t e r D e t a i l   w h e r e   h o s t N a m e = ' ' ' + @ h o s t N a m e + ' ' '   a n d   F l a g = 0   g r o u p   b y   k e y I D , G o o d s I D ' 
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
       e x e c ( @ s q l ) 
     e x e c ( ' d e l e t e   f r o m   R e p o r t M a s t e r D e t a i l   w h e r e   h o s t N a m e = ' ' ' + @ h o s t N a m e + ' ' '   a n d   F l a g = 0   ' )   
     
     U p d a t e   R e p o r t M a s t e r D e t a i l   s e t   A v g P r i c e = r o u n d ( F a c t A m o u n t / Q u a n t i t y , 2 )   w h e r e   h o s t N a m e = @ h o s t N a m e   a n d     I S N U L L ( Q u a n t i t y , 0 ) < > 0 
     
     U p d a t e   a   s e t   a . R e t a i l S a l e s   = g . R e t a i l S a l e s   , a . C o d e = g . C o d e , a . N a m e = g . N a m e     f r o m   R e p o r t M a s t e r D e t a i l   a , G o o d s   g   w h e r e   a . H o s t N a m e = @ h o s t N a m e   a n d   a . G o o d s I D = g . G o o d s I D   
     
     e n d 
 
 
 
 
 
 s e t   @ s q l   = ' i n s e r t   i n t o   ' + @ T T N a m e T + ' ( ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) + ' , Q t y , A m t , F l a g ) ' + @ C 1 3 + 
                     ' s e l e c t   ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) + ' , S u m ( Q t y ) , S u m ( A m t ) ,   1   f r o m   ' + @ T T N a m e T + '   w h e r e   F l a g   = 0   g r o u p   b y   ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) 
   
   i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
     e x e c ( @ s q l ) 
 E x e c ( ' d e l e t e   f r o m   ' + @ T T N a m e T + '   w h e r e   F l a g = 0 ' )       
   
   i f   @ d i s T y p e   i n ( ' �T{|' , ' �TLr' , ' �SFU' ) 
   b e g i n   
   E x e c ( ' a l t e r   t a b l e   ' + @ T T N a m e T + '   a d d   L v   m o n e y   , L v S t r   v a r c h a r ( 2 0 ) , t o t a l A m t   m o n e y   ' ) 
   E x e c ( ' U p d a t e   a   s e t   a . t o t a l A m t   = ( s e l e c t   S u m ( A m t )   f r o m   ' + @ T T N a m e T + ' )   f r o m   ' + @ T T N a m e T + '   a ' )   
   E x e c ( ' u p d a t e   ' + @ T T N a m e T + '   s e t   L v = 1 0 0 *   c o n v e r t ( f l o a t , A m t / t o t a l A m t )   w h e r e   i s n u l l ( t o t a l A m t , 0 ) < > 0 ' ) 
   E x e c ( ' U p d a t e   ' + @ T T N a m e T + '   s e t   L v S t r   = c a s t ( L v   a s   v a r c h a r ( 1 0 ) ) + ' ' % ' '   w h e r e   i s n u l l ( L v , 0 ) < > 0 ' )   
     s e t   @ s q l   = ' i n s e r t   i n t o   R e p o r t M a s t e r ( h o s t N a m e , k e y i d , Q u a n t i t y , F a c t A m o u n t , L v , L v S t r ) ' + @ C 1 3 + 
                       ' s e l e c t   ' ' ' + @ h o s t N a m e + ' ' ' , ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) + ' , Q t y , A m t , L v , L v S t r   f r o m   ' + @ T T N a m e T 
   e n d   e l s e   b e g i n 
   
   s e t   @ s q l   = ' i n s e r t   i n t o   R e p o r t M a s t e r ( h o s t N a m e , k e y i d , Q u a n t i t y , F a c t A m o u n t ) ' + @ C 1 3 + 
                       ' s e l e c t   ' ' ' + @ h o s t N a m e + ' ' ' , ' + R e p l a c e ( R e p l a c e ( R e p l a c e ( @ g r o u p f i e l d , ' g . ' , ' ' ) , ' b . ' , ' ' ) , ' a . ' , ' ' ) + ' , Q t y , A m t   f r o m   ' + @ T T N a m e T   
   e n d 
 
                       
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
     e x e c ( @ s q l ) 
     
     
     s e t   @ s q l   = ' U p d a t e   a   s e t   a . N a m e   = ' + @ F i e l d + '   f r o m   R e p o r t M a s t e r   a   ' + @ T a b l e N a m e + '   w h e r e   ' + @ j o i n S t r + '   a n d   a . h o s t N a m e = ' ' ' + @ h o s t N a m e + ' ' '   ' 
     
     i f   @ d e b u g F l a g   = 1   s e l e c t   @ s q l   
     e x e c ( @ s q l ) 
     
     i f   @ d i s T y p e   = '  �.U�cL�'   
     b e g i n   - - F a c t A m o u n t   '��S�e  9e:N��.U�N>f:y
     E x e c ( ' U p d a t e   R e p o r t M a s t e r   s e t   A v g P r i c e = F a c t A m o u n t / Q u a n t i t y   w h e r e   h o s t N a m e = ' ' ' + @ h o s t N a m e + ' ' '   a n d   i s n u l l ( Q u a n t i t y , 0 ) < > 0 ' ) 
       E x e c ( ' U p d a t e   a   s e t   a . R e t a i l S a l e s = g . R e t a i l S a l e s   f r o m   R e p o r t M a s t e r   a   , g o o d s   g     w h e r e   h o s t N a m e = ' ' ' + @ h o s t N a m e + ' ' '   a n d   a . k e y i d = g . g o o d s i d   ' ) 
   
     e n d 
     
     E x e c ( ' d r o p   t a b l e   ' + @ T T N a m e T ) 
   
   
   
   
   s e t   n o c o u n t   o f f                                   
 
 
 