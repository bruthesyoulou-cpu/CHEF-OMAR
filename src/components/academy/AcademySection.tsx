'use client';

import React, { useState } from 'react';
import { ACADEMY_COURSES, Course, CourseModule } from '@/data/academyData';
import { GraduationCap, Lock, Unlock, Play, CheckCircle, ShieldCheck, CreditCard, Sparkles, X, Smartphone } from 'lucide-react';

export default function AcademySection() {
  const [selectedCourse, setSelectedCourse] = useState<Course>(ACADEMY_COURSES[0]);
  const [activeModule, setActiveModule] = useState<CourseModule | null>(ACADEMY_COURSES[0].modules[0]);
  const [unlockedCourses, setUnlockedCourses] = useState<string[]>([]);
  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [paymentMethod, setPaymentMethod] = useState<'wave' | 'om' | 'card'>('wave');
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);

  const isCourseUnlocked = unlockedCourses.includes(selectedCourse.id);

  const handleUnlockCourse = () => {
    setIsProcessing(true);

    // Simulation de validation Wave / Orange Money
    setTimeout(() => {
      setUnlockedCourses((prev) => [...prev, selectedCourse.id]);
      setIsProcessing(false);
      setShowPaymentModal(false);
      // Sélectionne automatiquement le 2e module débloqué
      setActiveModule(selectedCourse.modules[1]);
      alert(`Félicitations ! Formation "${selectedCourse.title}" débloquée avec succès !`);
    }, 1500);
  };

  return (
    <section className="space-y-8 my-12">
      <div>
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight flex items-center gap-2">
          <GraduationCap className="w-7 h-7 text-[var(--color-accent)]" />
          Académie & Masterclass Chef Omar
        </h2>
        <p className="text-sm text-gray-400 mt-1">
          Formations en ligne payantes : maîtrisez les techniques de la haute gastronomie sénégalaise et fusion.
        </p>
      </div>

      {/* Sélection du Cours */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {ACADEMY_COURSES.map((course) => {
          const isUnlocked = unlockedCourses.includes(course.id);
          const isSelected = selectedCourse.id === course.id;

          return (
            <div
              key={course.id}
              onClick={() => {
                setSelectedCourse(course);
                setActiveModule(course.modules[0]);
              }}
              className={`p-5 rounded-2xl glass-miroir border cursor-pointer transition-all flex gap-4 ${
                isSelected
                  ? 'border-[var(--color-accent)] ring-1 ring-[var(--color-accent)] bg-white/5'
                  : 'border-white/10 hover:border-white/20'
              }`}
            >
              <div className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0 bg-slate-800 relative">
                <img src={course.thumbnail} alt={course.title} className="w-full h-full object-cover" />
                <span className="absolute bottom-1 right-1 bg-black/80 px-2 py-0.5 rounded text-[9px] font-mono text-white">
                  {course.totalDuration}
                </span>
              </div>

              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start gap-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                      {course.category}
                    </span>
                    {isUnlocked ? (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">
                        <Unlock className="w-3 h-3" /> Débloqué
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-[10px] font-bold text-amber-400 bg-amber-400/10 px-2 py-0.5 rounded-full">
                        <Lock className="w-3 h-3" /> Payant
                      </span>
                    )}
                  </div>
                  <h3 className="font-bold text-base mt-1 line-clamp-1">{course.title}</h3>
                  <p className="text-xs text-gray-400 line-clamp-2 mt-0.5">{course.subtitle}</p>
                </div>

                <div className="flex justify-between items-center mt-3 pt-2 border-t border-white/5">
                  <span className="text-xs text-gray-300 font-semibold">{course.modulesCount} modules</span>
                  <span className="text-sm font-extrabold text-amber-400">
                    {course.price.toLocaleString()} {course.currency}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Zone de lecture & programme des modules */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Lecteur Vidéo principal */}
        <div className="lg:col-span-7 space-y-4">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black border border-white/10 glass-miroir flex items-center justify-center">
            {activeModule && (activeModule.isFreePreview || isCourseUnlocked) ? (
              activeModule.videoUrl ? (
                <video
                  src={activeModule.videoUrl}
                  controls
                  autoPlay
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center p-6 space-y-3">
                  <Play className="w-12 h-12 text-[var(--color-accent)] mx-auto" />
                  <p className="text-sm font-semibold">{activeModule.title}</p>
                  <p className="text-xs text-gray-400">Vidéo HD disponible pour ce module débloqué.</p>
                </div>
              )
            ) : (
              <div className="text-center p-8 space-y-4 bg-black/80 w-full h-full flex flex-col items-center justify-center">
                <Lock className="w-12 h-12 text-amber-400" />
                <div className="space-y-1">
                  <h4 className="font-bold text-lg text-white">Module Verrouillé</h4>
                  <p className="text-xs text-gray-400 max-w-sm mx-auto">
                    Achetez la formation complète pour débloquer l'accès à tous les modules et fiches de recettes PDF.
                  </p>
                </div>
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center gap-2 shadow-xl transition-transform active:scale-95"
                >
                  <Unlock className="w-4 h-4" /> Débloquer pour {selectedCourse.price.toLocaleString()} {selectedCourse.currency}
                </button>
              </div>
            )}
          </div>

          {/* Description du module actif */}
          {activeModule && (
            <div className="p-5 rounded-2xl glass-miroir border border-white/10 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-lg">{activeModule.title}</h3>
                <span className="text-xs font-mono text-gray-400">{activeModule.duration}</span>
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">{activeModule.description}</p>
            </div>
          )}
        </div>

        {/* Liste interactive des modules */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-5 rounded-2xl glass-miroir border border-white/10 space-y-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="font-bold text-base">Programme de la formation</h3>
                <p className="text-xs text-gray-400">{selectedCourse.modules.length} modules vidéo</p>
              </div>

              {!isCourseUnlocked && (
                <button
                  onClick={() => setShowPaymentModal(true)}
                  className="px-3 py-1.5 rounded-lg bg-amber-500 text-black text-xs font-bold hover:bg-amber-400"
                >
                  Acheter
                </button>
              )}
            </div>

            <div className="space-y-2 max-h-[400px] overflow-y-auto pr-1">
              {selectedCourse.modules.map((module, idx) => {
                const canAccess = module.isFreePreview || isCourseUnlocked;
                const isActive = activeModule?.id === module.id;

                return (
                  <div
                    key={module.id}
                    onClick={() => setActiveModule(module)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-center justify-between gap-3 ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-white border-[var(--color-accent)]'
                        : 'glass-miroir border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-xs font-bold flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </span>
                      <div>
                        <p className="text-xs font-semibold line-clamp-1">{module.title}</p>
                        <p className="text-[10px] opacity-75">{module.duration}</p>
                      </div>
                    </div>

                    <div className="flex-shrink-0">
                      {module.isFreePreview && !isCourseUnlocked ? (
                        <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                          Aperçu Gratuit
                        </span>
                      ) : canAccess ? (
                        <Play className="w-4 h-4 text-white" />
                      ) : (
                        <Lock className="w-4 h-4 text-amber-400" />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Modal de Paiement Mobile Money Sénégal (Wave, Orange Money) */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4">
          <div className="relative w-full max-w-md rounded-3xl glass-miroir border border-white/20 p-6 space-y-6 shadow-2xl">
            <button
              onClick={() => setShowPaymentModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-bold bg-amber-400/10 px-3 py-1 rounded-full">
                <Sparkles className="w-3.5 h-3.5" /> Paiement Sécurisé
              </div>
              <h3 className="text-xl font-bold">Débloquer : {selectedCourse.title}</h3>
              <p className="text-xs text-gray-400">Montant total : <strong className="text-white font-bold">{selectedCourse.price.toLocaleString()} {selectedCourse.currency}</strong></p>
            </div>

            {/* Choix Mode de paiement */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 block">Choisissez votre moyen de paiement :</label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('wave')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'wave'
                      ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <Smartphone className="w-5 h-5" /> Wave
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('om')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'om'
                      ? 'border-orange-500 bg-orange-500/10 text-orange-400'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <Smartphone className="w-5 h-5" /> Orange Money
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-bold flex flex-col items-center gap-1.5 transition-all ${
                    paymentMethod === 'card'
                      ? 'border-purple-400 bg-purple-400/10 text-purple-400'
                      : 'border-white/10 bg-white/5 hover:border-white/20'
                  }`}
                >
                  <CreditCard className="w-5 h-5" /> Carte Visa
                </button>
              </div>
            </div>

            {/* Champ téléphone */}
            <div className="space-y-2">
              <label className="text-xs font-semibold text-gray-300 block">Numéro de téléphone ({paymentMethod.toUpperCase()}) :</label>
              <input
                type="tel"
                placeholder="+221 77 000 00 00"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full px-4 py-3 rounded-xl glass-miroir border border-white/10 text-sm text-white focus:outline-none focus:border-[var(--color-accent)]"
              />
            </div>

            <button
              onClick={handleUnlockCourse}
              disabled={isProcessing}
              className="w-full py-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-extrabold text-xs flex items-center justify-center gap-2 shadow-xl transition-transform active:scale-95"
            >
              {isProcessing ? (
                'Validation du paiement en cours...'
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4" /> Valider et Accéder aux Modules ({selectedCourse.price.toLocaleString()} FCFA)
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}